package com.example.springbootbackend;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // To all requested paths
//                        .allowedOrigins("*") // allow all origins
                        .allowedOriginPatterns("*")
                        .allowCredentials(true)// allow all cookies
                        .allowedMethods("GET", "POST", "DELETE", "PUT", "PATCH")// allow all methods
                        .maxAge(3600);
            }
        };
    }
}