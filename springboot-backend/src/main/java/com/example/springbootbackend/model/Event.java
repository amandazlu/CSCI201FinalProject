package com.example.springbootbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "events")
public class Event {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @Column(name = "name")
	private String event_name;

	@Column(name = "description")
	private String event_description;

	@Column(name = "location")
	private String event_location;

	@Column(name = "date")
	private String event_date;

    @Column(name = "time")
	private String event_time;
	
	@Column(name = "floor_tickets_left")
	private int floor_tickets_left;

    @Column(name = "vip_tickets_left")
	private int vip_tickets_left;

    @Column(name = "genad_tickets_left")
	private int genad_tickets_left;

    @Column(name = "floor_ticket_price")
	private float floor_ticket_price;

    @Column(name = "vip_ticket_price")
	private float vip_ticket_price;

    @Column(name = "genad_ticket_price")
	private float genad_ticket_price;
	
	public Event() {
		
	}

    public Event(String name, String description, String location,
				String date, String time, int floor_tickets_left, 
                int vip_tickets_left, int genad_tickets_left, float floor_ticket_price,
                float vip_ticket_price, float genad_ticket_price) {
		super();
		this.event_name = name;
		this.event_description = description;
		this.event_location = location;
        this.event_date = date;
        this.event_time = time;
        this.floor_tickets_left = floor_tickets_left;
        this.vip_tickets_left = vip_tickets_left;
        this.genad_tickets_left = genad_tickets_left;
        this.floor_ticket_price = floor_ticket_price;
        this.vip_ticket_price = vip_ticket_price;
        this.genad_ticket_price = genad_ticket_price;
	}

    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEventDescription() {
		return event_description;
	}
	public void setEventDescription(String des) {
		this.event_description = des;
	}
	public String getEventLocation() {
		return event_location;
	}
	public void setEventLocation(String loc) {
		this.event_location = loc;
	}
	public String getEventName() {
		return event_name;
	}
	public void setEventName(String name) {
		this.event_name = name;
	}
    public String getEventDate() {
		return event_date;
	}
	public void setEventDate(String date) {
		this.event_date = date;
	}
    public String getEventTime() {
		return event_time;
	}
	public void setEventTime(String time) {
		this.event_time = time;
	}
	public int getFloorTicketsLeft() {
		return floor_tickets_left;
	}
	public void setFloorTicketsLeft(int num) {
		this.floor_tickets_left = num;
	}
    public int getVipTicketsLeft() {
		return vip_tickets_left;
	}
	public void setVipTicketsLeft(int num) {
		this.vip_tickets_left = num;
	}
    public int getGenadTicketsLeft() {
		return genad_tickets_left;
	}
	public void setGenadTicketsLeft(int num) {
		this.genad_tickets_left = num;
	}
    public float getFloorTicketPrice() {
		return floor_ticket_price;
	}
	public void setFloorTicketPrice(float price) {
		this.floor_ticket_price = price;
	}
    public float getVipTicketPrice() {
		return vip_ticket_price;
	}
	public void setVipTicketPrice(float price) {
		this.vip_ticket_price = price;
	}
    public float getGenadTicketPrice() {
		return genad_ticket_price;
	}
	public void setGenadTicketPrice(float price) {
		this.genad_ticket_price = price;
	}
}
