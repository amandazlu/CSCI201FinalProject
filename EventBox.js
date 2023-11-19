import React from "react";
import "./Box.css";
import Header from "../pages/Header";
import {useNavigate} from"react-router-dom";

function EventBox() {
    const navigate = useNavigate();

    const message = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <div className = "type">
                <div className = "grid">
                        <img src="/images/party1.jpg" alt="Home Image" className = "image"/>
                        <p className = "event-header">Event 1</p>
                        <p className = "event-location">Los Angeles, CA</p>
                        <div className = "box">
                            <p style = {{fontWeight : "bold", fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>Description: </p>
                            <p style = {{fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>{message}</p>
                            <br></br>
                            <button className = "reserve-button">Reserve</button>
                        </div>
                </div>
            </div>

            <div className = "type">
                <div className = "grid">
                        <img src="/images/party2.jpeg" alt="Home Image" className = "image"/>
                        <p className = "event-header">Event 2</p>
                        <p className = "event-location">San Francisco, CA</p>
                        <div className = "box">
                            <p style = {{fontWeight : "bold", fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>Description: </p>
                            <p style = {{fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>{message}</p>
                            <br></br>
                            <button className = "reserve-button">Reserve</button>
                        </div>
                </div>
            </div>

            <div className = "type">
                <div className = "grid">
                        <img src="/images/party3.jpg" alt="Home Image" className = "image"/>
                        <p className = "event-header">Event 3</p>
                        <p className = "event-location">New York, NY</p>
                        <div className = "box">
                            <p style = {{fontWeight : "bold", fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>Description: </p>
                            <p style = {{fontSize : "0.8vw", textAlign : "left" , padding : "3%"}}>{message}</p>
                            <br></br>
                            <button className = "reserve-button">Reserve</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default EventBox;