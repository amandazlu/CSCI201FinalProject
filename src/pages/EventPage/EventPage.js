import React from "react"
import "./EventCss.css"
import Header from "../Header/Header";
import {useNavigate} from"react-router-dom";

function Event() {
	const navigate = useNavigate;
	const eventName = "Event 1"
	const eventVenue = "Lorem ipsum address";
	const eventDescrip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
    return (
        <div>
			<Header/>
			<br/>
			<br/>
			<div className="event">
				<div className="eventhead">
					<div className="eventhead-text">
						<h2>{eventName}</h2>
						<p>Los Angeles, CA</p>
						<h2 className="date">xx/xx/xxxx</h2>
					</div>
				</div>
				<div className="eventdescrip">
					<h4>Venue Address:</h4>
					<p>{eventVenue}</p>
					<h4>Description:</h4>
					<p>{eventDescrip}</p>
				</div>
			</div>
			<div className="tickets">
				<h3>Tickets</h3>
				<div className="ticket">
					<h3>General Admission</h3>
					<p>140/200 available</p>
					<button>Reserve</button>
				</div>
				<div className="ticket">
					<h3>Floor Tickets</h3>
					<p>50/50 available</p>
					<button>Reserve</button>
				</div>
				<div className="ticket">
					<h3>VIP Admission</h3>
					<p>50/50 available</p>
					<button>Reserve</button>
				</div>
			</div>
		</div>
    );
}

export default Event;