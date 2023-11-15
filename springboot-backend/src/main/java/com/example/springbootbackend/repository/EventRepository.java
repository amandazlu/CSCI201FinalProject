package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootbackend.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long>{

}