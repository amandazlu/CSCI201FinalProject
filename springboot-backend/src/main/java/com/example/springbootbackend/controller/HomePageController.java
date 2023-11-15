package com.example.springbootbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Event;
import com.example.springbootbackend.repository.EventRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class HomePageController {

	@Autowired
	private EventRepository eventRepository;
	
	// get all events
	@GetMapping("/homepage")
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}		
	
	// get event by id rest api
	@GetMapping("/homepage/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable Long id) {
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Event not exist with id :" + id));
		return ResponseEntity.ok(event);
	}
	
	// update event rest api
	// TODO(sophiakrugler): figure out if we need this method
	@PutMapping("/homepage/{id}")
	public ResponseEntity<Event> updateEmployee(@PathVariable Long id, @RequestBody Event eventDetails){
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Event not exist with id :" + id));
		
		event.setEventName(eventDetails.getEventName());
		event.setEventDate(eventDetails.getEventDate());
        event.setEventTime(eventDetails.getEventTime());
        event.setFloorTicketsLeft(eventDetails.getFloorTicketsLeft());
        event.setVipTicketsLeft(eventDetails.getVipTicketsLeft());
        event.setGenadTicketsLeft(eventDetails.getGenadTicketsLeft());
        event.setFloorTicketPrice(eventDetails.getFloorTicketPrice());
        event.setVipTicketPrice(eventDetails.getVipTicketPrice());
        event.setGenadTicketPrice(eventDetails.getGenadTicketPrice());
		
		Event updatedEvent = eventRepository.save(event);
		return ResponseEntity.ok(updatedEvent);
	}
	
	
}