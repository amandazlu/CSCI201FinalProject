package com.example.springbootbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

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
import com.example.springbootbackend.model.User;
import com.example.springbootbackend.model.Ticket;
import com.example.springbootbackend.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProfilePageController {

	@Autowired
	private UserRepository userRepository;
	
	// get user. user contains set of tickets.
    // TODO: may not want the username in the url. try to find another way to pass the information.
	@GetMapping("/profile/{email}")
	public ResponseEntity<User> getUser(@PathVariable String email){
        User user = userRepository.findById(email)
            .orElseThrow(() -> new ResourceNotFoundException("User not exist with email :" + email));
        return ResponseEntity.ok(user);
	}	
    
    // TODO: merge this into the profile page (should not be a separate url)
    @GetMapping("/profile/{email}/tickets")
	public Set<Ticket> getTickets(@PathVariable String email){
        User user = userRepository.findById(email)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with email :" + email));
        return user.getTickets();
	}	
	
    // TODO: add method for removing tickets
    // TODO: implement exceptions for resource not found
}