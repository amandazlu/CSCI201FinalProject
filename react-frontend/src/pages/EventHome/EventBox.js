import React, { useEffect, useState } from "react";
import "./Box.css";
import {Navigate} from"react-router-dom";
import axios from 'axios';

function EventBox(props) {
    const {image, id, name, location, message} = props;
    const [eventId, setEventId] = useState(id);
    const [profile, setProfile] = useState(false);
    const image_path = "/images/" + image;
    const temp_message = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

    useEffect(() => {
        setEventId(id);
    }, [id]); 

    if (profile) { return <Navigate to="/event-page" state={{ id }}/> }
    
    return (
        <div className = "type2">
                <div className = "grid">
                        <img src={image_path} alt="Home Image" className = "image"/>
                        <p className = "event-header">{name}</p>
                        <p className = "event-location">{location}</p>
                        <div className = "box">
                            <p style = {{fontWeight : "bold", fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>Description: </p>
                            <p style = {{fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>{message}</p>
                            <br></br>
                            <button className = "reserve-button" onClick={() => {setProfile(true)}}>Reserve</button>
                        </div>
                </div>
            </div>
    );
}

export default EventBox;