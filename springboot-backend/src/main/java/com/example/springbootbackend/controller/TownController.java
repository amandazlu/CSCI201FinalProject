package com.example.springbootbackend.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TownController {

    @GetMapping("/validate")
    public String home(Model model) {
        // The 'globalMessage' attribute is added to the model
    	String attributeValue = (String) model.getAttribute("globalMessage");
        return attributeValue; // This assumes you're using JSP files
    }
}