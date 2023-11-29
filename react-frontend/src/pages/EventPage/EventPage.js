import React, { useEffect, useState } from "react";
import "./EventCss.css"
import Header from "../Header/Header";
import {useNavigate, useLocation} from"react-router-dom";
import axios from 'axios';


function Event(props) {
	const {state} = useLocation();
	const {id} = state;//eventID
	const [eventData, setEventData] = useState(null);
	const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
	  if (id) {
	    const apiRoute = "http://localhost:8080/api/v1/homepage";
	    axios.get(apiRoute)
	      .then(response => {
	        // Assuming response.data is an array of objects
	        const event = response.data.find(event => event.id === id);
	        setEventData(event);
	        console.log(event);
	      })
	      .catch(error => {
	        console.log('Error fetching data:', error);
	      });
	  }
	  routeTest();
	}, [id]);

	const apiRouteTest = "http://localhost:8080/api/v1/test";
	function routeTest() {
        axios.get(apiRouteTest).then(response => {
			setUserEmail(decodeURIComponent(response.data).replace(/=$/, ''));
        });
        return;
    }

	const reserveTicket = async (ticketType) => {
        const apiRoute = `http://localhost:8080/api/v1/homepage/${id}`;
        try {
			console.log("ticketType: ", ticketType);
			console.log("useremail:", userEmail);
			console.log("eventID: ", id);
            const response = await axios.post(apiRoute, null, {
                params: {
                    email: userEmail,
                    ticketType: ticketType,
                    eventId: id,
                },
            });
            if (response.status === 200) {
                // Handle successful reservation here
		alert('Reservation successful');
		window.location.reload();
            }
        } catch (error) {
            console.log('Error making reservation:', error);
        }
    };

	const navigate = useNavigate;
	const eventName = eventData ? eventData.eventName : "Loading...";
    const eventVenue = eventData ? eventData.eventLocation : "Loading...";
    const eventDescrip = eventData ? eventData.eventDescription : "Loading...";
    const eventDate = eventData ? 
                  `${eventData.eventDate.slice(0, 2)}/${eventData.eventDate.slice(2, 4)}/${eventData.eventDate.slice(4)}` : 
                  "Loading...";
    const eventTime = eventData ? eventData.eventTime : "Loading...";
    const floorTicketPrice = eventData ? eventData.floorTicketPrice : "Loading...";
    const floorTicketsLeft = eventData ? eventData.floorTicketsLeft : "Loading...";
    const genadTicketPrice = eventData ? eventData.genadTicketPrice : "Loading...";
    const genadTicketsLeft = eventData ? eventData.genadTicketsLeft : "Loading...";
    const vipTicketPrice = eventData ? eventData.vipTicketPrice : "Loading...";
    const vipTicketsLeft = eventData ? eventData.vipTicketsLeft : "Loading...";
    return (
        <div>
			<Header/>
			<div className="event">
				<div className="eventhead">
					<div className="eventhead-text">
						<p style = {{fontSize : "3vw", textAlign : "left" , padding : "3%"}}>{eventName}</p>
						<p style = {{fontSize : "2vw", textAlign : "left" , padding : "3%"}}>{eventVenue}</p>
						<p className="date" style = {{fontSize : "2vw", textAlign : "right" , padding : "3%"}}>{eventDate} {eventTime}</p>
					</div>
				</div>
				<div className="eventdescrip">
					<p style = {{fontSize : "2vw", textAlign : "left" , padding : "3%"}}>Venue Address:</p>
					<p style = {{fontSize : "1vw", textAlign : "left" , padding : "3%"}}>{eventVenue}</p>
					<p style = {{fontSize : "2vw", textAlign : "left" , padding : "3%"}}>Description:</p>
					<p style = {{fontSize : "1vw", textAlign : "left" , padding : "3%"}}>{eventDescrip}</p>
				</div>
			</div>
			<div className="type">
				<p style = {{fontWeight: "bold", fontSize: "3vw", textAlign: "left", padding: "3%"}}>Tickets</p>
			    <div className="grid">
			        <div className="ticket">
			            <p className="event-header" style = {{fontWeight: "bold", fontSize: "1.5vw", textAlign: "left", padding: "3%", color:"black"}}>Floor Tickets</p>
			            <p className="event-price" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>Price: ${floorTicketPrice}</p>
			            <p className="event-location" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>{floorTicketsLeft} available</p>
			            <button className="reserve-button" onClick={() => reserveTicket('floor')}>Reserve</button>
			        </div>
			        <div className="ticket">
			            <p className="event-header" style = {{fontWeight: "bold", fontSize: "1.5vw", textAlign: "left", padding: "3%", color:"black"}}>General Admission</p>
			            <p className="event-price" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>Price: ${genadTicketPrice}</p>
			            <p className="event-location" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>{genadTicketsLeft} available</p>
			            <button className="reserve-button" onClick={() => reserveTicket('genad')}>Reserve</button>
			        </div>
			        <div className="ticket">
			            <p className="event-header" style = {{fontWeight: "bold", fontSize: "1.5vw", textAlign: "left", padding: "3%", color:"black"}}>VIP Admission</p>
			            <p className="event-price" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>Price: ${vipTicketPrice}</p>
			            <p className="event-location" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>{vipTicketsLeft} available</p>
			            <button className="reserve-button" onClick={() => reserveTicket('vip')}>Reserve</button>
			        </div>
			    </div>
			</div>

		</div>
    );
}

export default Event;
