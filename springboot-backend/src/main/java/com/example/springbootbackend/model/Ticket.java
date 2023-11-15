package com.example.springbootbackend.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.*;

@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @Column(name = "ticket_type")
	private String ticket_type;

    // Foreign key
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "event_id", referencedColumnName = "id")
    private Event event;

     // Foreign key
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "email")
    @JsonManagedReference
	private User user;
    
	
	public Ticket() {
		
	}

    public Ticket(String ticket_type, Event event, User user) {
		super();
		this.ticket_type = ticket_type;
        this.event = event;
        this.user = user;
	}

    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Event getEvent() {
		return event;
	}
	public void setEvent(Event event) {
		this.event= event;
	}
    public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
}
