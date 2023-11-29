package com.example.springbootbackend.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.model.User;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class HomeController {
	
	class User {
		private String name;
		private String email;
		
		User() {}
		User(String name, String email) {this.name = name; this.email = email;}
		
		void setName(String name) {this.name = name;}
		public String getName() {return this.name;}
		
		void setEmail(String email) {this.email = email;}
		public String getEmail() {return this.email;}
	}
	
	private User currentUser = new User("John Doe", "john@example.com");
	
	@GetMapping("/test")
    public String userDetails() {
        return currentUser.getEmail();
    }

    @PostMapping("/test")
    public String updateUserDetails(@RequestBody String updatedUser) {
        // Update the current user with the new details
    	currentUser.setEmail(updatedUser);
        return updatedUser;
    }
}