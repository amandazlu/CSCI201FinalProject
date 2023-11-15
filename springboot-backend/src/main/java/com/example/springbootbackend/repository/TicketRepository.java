package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootbackend.model.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long>{

}