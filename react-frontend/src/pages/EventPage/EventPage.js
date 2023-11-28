import React from "react"
import "./EventCss.css"
import Header from "../Header/Header";
import {useNavigate} from"react-router-dom";

function Event(props) {
	const {id} = props;
	const navigate = useNavigate;
	const eventName = "Event 1"
	const eventVenue = "Lorem ipsum address";
	const eventDescrip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
    return (
        <div>
			<p>Eric Kim</p>
			<p>{id}</p>
			<Header/>
			<div className="event">
				<div className="eventhead">
					<div className="eventhead-text">
						<p style = {{fontSize : "3vw", textAlign : "left" , padding : "3%"}}>{eventName}</p>
						<p style = {{fontSize : "2vw", textAlign : "left" , padding : "3%"}}>Los Angeles, CA</p>
						<p className="date" style = {{fontSize : "2vw", textAlign : "right" , padding : "3%"}}>xx/xx/xxxx</p>
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
			            <p className="event-header" style = {{fontWeight: "bold", fontSize: "1.5vw", textAlign: "left", padding: "3%", color:"black"}}>General Admission</p>
			            <p className="event-location" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>140/200 available</p>
			            <div className="box">
			                <button className="reserve-button">Reserve</button>
			            </div>
			        </div>
			        <div className="ticket">
			            <p className="event-header" style = {{fontWeight: "bold", fontSize: "1.5vw", textAlign: "left", padding: "3%", color:"black"}}>Floor Tickets</p>
			            <p className="event-location" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>50/50 available</p>
			            <div className="box">
			                <button className="reserve-button">Reserve</button>
			            </div>
			        </div>
			        <div className="ticket">
			            <p className="event-header" style = {{fontWeight: "bold", fontSize: "1.5vw", textAlign: "left", padding: "3%", color:"black"}}>VIP Admission</p>
			            <p className="event-location" style = {{fontWeight: "bold", fontSize: "1vw", textAlign: "left", padding: "3%", color:"black"}}>50/50 available</p>
			            <div className="box">
			                <button className="reserve-button">Reserve</button>
			            </div>
			        </div>
			    </div>
			</div>

		</div>
    );
}

export default Event;
