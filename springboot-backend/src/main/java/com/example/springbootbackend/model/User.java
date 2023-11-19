package com.example.springbootbackend.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
	private String email;

    @Column(name = "first_name")
	private String first_name;

	@Column(name = "last_name")
	private String last_name;

    @Column(name = "password")
	private String password;
	
	@Column(name = "verified")
	private boolean verified;

    @OneToMany(cascade = CascadeType.PERSIST, mappedBy="user")
    @JsonBackReference
	private Set<Ticket> tickets;
	
	public User() {
		
	}

    public User(String first_name, String last_name, String email, String password, 
                boolean verified, Set<Ticket> tickets) {
		super();
		this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.verified = verified;
        this.tickets = tickets;
	}

	public String getFirstName() {
		return first_name;
	}
	public void setFirstName(String name) {
		this.first_name = name;
	}
    public String getLastName() {
		return last_name;
	}
	public void setLastName(String name) {
		this.last_name = name;
	}
    public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
    public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    public boolean isVerified() {
		return verified;
	}
	public void setVerified(boolean verified) {
		this.verified = verified;
	}
    public Set<Ticket> getTickets(){
        return tickets;
    }
    public void setTikets(Set<Ticket> tickets){
        this.tickets = tickets;
    }
    public void addTicket(Ticket ticket){
        this.tickets.add(ticket);
    }
	public boolean hasTicket(Ticket ticket){
		return tickets.contains(ticket);
	}
	public boolean removeTicket(Ticket ticket){
		return tickets.remove(ticket);
	}

}
