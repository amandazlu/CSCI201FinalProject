package com.example.springbootbackend.controller;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Semaphore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.repository.TicketRepository;
import com.example.springbootbackend.repository.UserRepository;

import com.example.springbootbackend.model.Ticket;
import com.example.springbootbackend.model.User;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.User;
import com.example.springbootbackend.model.Ticket;
import com.example.springbootbackend.model.Event;
import com.example.springbootbackend.repository.UserRepository;
import com.example.springbootbackend.repository.TicketRepository;
import com.example.springbootbackend.repository.EventRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EventPageController {

    @Autowired
    private TicketRepository ticketRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private EventRepository eventRepo;

    @PostMapping("/homepage/{eventId}")
    public String reserveTicket(@RequestParam("email") String userId, @RequestParam("ticketType") String type, @PathVariable Long eventId) {
    // Your controller logic goes here
        System.out.println("Reached reserve ticket function");
        // Invoke the asynchronous method
        int result = reserveTicketHelper(userId, type, eventId); // handle return value

        if(result == -3){
            return "User could not be found.";
        }
        else if(result == -2){
            return "Not enough tickets left.";
        }
        else if(result == -1){
            return "Event could not be found.";
        }
        return "Ticket successfully reserved.";
    }
   
   
static Map<String, Semaphore> userTicketSemaphores = new ConcurrentHashMap<>();

/*
-1 : event does not exist in repository. should not techincally be possible
-2 : no tickets left for this ticket type
-3 : no user found
1 : success
*/
@Async
public int reserveTicketHelper(String userEmail, String ticketType, long eventId) {
    Event event = eventRepo.findById(eventId).orElse(null);
    User user = userRepo.findById(userEmail).orElse(null);
    if(user == null){
        return -3;
    }
    if(event == null){
         return -1;
    }

    // Create or retrieve a semaphore for the user and ticket pair
   Semaphore semaphore = userTicketSemaphores.computeIfAbsent(getKey(userEmail, eventId), key -> new Semaphore(1));

   try {
       // Acquire the semaphore to get exclusive access
       semaphore.acquire();

       // Check stil valid
       Ticket ticket = new Ticket();
       ticket.setTicketType(ticketType);
       ticket.setEvent(event);
       ticket.setUser(user);

       if(ticketType.equals("vip")){
            if(event.getVipTicketsLeft() == 0){
                return -2;
            }
            event.setVipTicketsLeft(event.getVipTicketsLeft() - 1);
        }
        else if (ticketType.equals("floor")){
            if(event.getFloorTicketsLeft() == 0){
                return -2;
            }
            event.setFloorTicketsLeft(event.getFloorTicketsLeft() - 1);
        }
        else{
        // genad
            if(event.getGenadTicketsLeft() == 0){
                return -2;
            }
            event.setGenadTicketsLeft(event.getGenadTicketsLeft() - 1);
        }
       // Should auto increment the id.
       ticketRepo.save(ticket);
       user.addTicket(ticket);
       userRepo.save(user);
       eventRepo.save(event);


   } catch (InterruptedException e) {
       Thread.currentThread().interrupt();
   } finally {
       // Release the semaphore to allow other requests for the same user and ticket pair
       semaphore.release();
   }

   return 1;
}

private static String getKey(String userId, long ticketId) {
   return userId + "-" + ticketId;
}
}