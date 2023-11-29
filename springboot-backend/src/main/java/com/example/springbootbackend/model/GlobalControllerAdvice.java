package com.example.springbootbackend.model;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class GlobalControllerAdvice {

    @ModelAttribute("globalMessage")
    public String globalMessage() {
        return "eric kim";
    }
}
