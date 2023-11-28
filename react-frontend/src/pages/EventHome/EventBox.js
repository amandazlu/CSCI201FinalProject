import React from "react";
import "./Box.css";
import Header from "../Header/Header";
import {useNavigate} from"react-router-dom";
import axios from 'axios';

function EventBox(props) {
    const {image, message} = props;
    const image_path = "/images/" + image;
    const temp_message = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
    
    return (
        <div className = "type">
                <div className = "grid">
                        <img src={image_path} alt="Home Image" className = "image"/>
                        <p className = "event-header">Event 1</p>
                        <p className = "event-location">Los Angeles, CA</p>
                        <div className = "box">
                            <p style = {{fontWeight : "bold", fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>Description: </p>
                            <p style = {{fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>{temp_message}</p>
                            <br></br>
                            <button className = "reserve-button">Reserve</button>
                        </div>
                </div>
            </div>
    );
}

export default EventBox;