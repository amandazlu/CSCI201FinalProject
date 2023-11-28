package com.example.springbootbackend.controller;


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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import com.example.springbootbackend.repository.TicketRepository;
import com.example.springbootbackend.repository.EventRepository;

/*
 * Recieves email and pass that a user enters and verifies it, 
 * returning "Login Successful" if successfully verified
 */
@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	private UserRepository userRepository;
	
	@Autowired
	private HttpServletRequest httpServletRequest;
	
	@Autowired
    public LoginController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestParam("email") String email, @RequestParam("password") String password) {
		Optional<User> userOptional = userRepository.findById(email);
		
		
		if (!userOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		}
		
		if (!userOptional.get().getPassword().equals(password)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		}
		
		//sets verification to true upon login
		userOptional.get().setVerified(true);
		
		
		// set email and password in session
		HttpSession mySession = httpServletRequest.getSession();
		mySession.setAttribute(email, password);
		

	    return ResponseEntity.ok("Login Successful");
	}
}
