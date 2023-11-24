import React, { useState, useEffect } from 'react';
import axios from 'axios'; // install axios to make an HTTP request to your Spring Boot backend
import './style.css';
import ProfileHeader from "../ProfileHeader/profileheader";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize logged-in state as false
    // const [tickets, setTickets] = useState([]); // Initialize tickets state as an empty array

    // Dummy function to simulate login/logout
    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);


    const tickets = [
        { name: 'Name#1', location: 'Location#1', time: 'Time#1'},
        { name: 'Name#2', location: 'Location#2', time: 'Time#2'},
        { name: 'Name#3', location: 'Location#3', time: 'Time#3'}
    ];

    // useEffect(() => {
    //     // Fetch tickets when the component mounts
    //     const fetchTickets = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/api/v1/profile/${userEmail}`);
    //             // Assuming the response contains tickets in the desired format
    //             setTickets(response.data[userEmail]);
    //         } catch (error) {
    //             console.error("Error fetching tickets", error);
    //         }
    //     };

    //     if (isLoggedIn) {
    //         fetchTickets();
    //     }
    // }, [isLoggedIn, userEmail]);

    let content;
    if (isLoggedIn) {
        content = (
            <div className="container1">
                <div className="welcome">
                    <p>Welcome!</p>
                    <p>USC Email: <input type="email" value="USCEmail" disabled /></p>
                    <p>Password: <input type="password" value="******" disabled /></p>
                </div>

                <div className="ticket">
                    <p>Your Tickets:</p>
                    {tickets.map((ticket, index) => (
                        <div key={index}>{`${ticket.name} ${ticket.location} ${ticket.time}`}</div>
                    ))}
                </div>
                <button type="button" onClick={handleLogout}>Log Out</button>
            </div>
        );
    } else {
        content = (
            <div className="container2">
                <p className="welcome-message">Welcome!</p>
                <p>You are currently a guest user, please sign up or sign in for reservation and profile service.</p>
                <button type="button" onClick={handleLogin}>Sign in</button>
                <button type="button">Sign up</button>
            </div>
        );
    }

    return (
        <div>
            <ProfileHeader />
            {content}
        </div>
    );
}

export default ProfilePage;
