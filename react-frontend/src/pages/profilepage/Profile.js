import React, { useState, useEffect } from 'react';
import axios from 'axios'; // install axios to make an HTTP request to your Spring Boot backend
import './profilestyle.css';
import ProfileHeader from "../ProfileHeader/profileheader";
import { useNavigate } from "react-router-dom";

const apiRoute = "http://localhost:8080/api/v1/profile/";
const userRoute = "http://localhost:8080/api/v1/test"

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize logged-in state as false

    const handleLogin = () => {
        navigate('/'); // redirect to the path of login page
    };

    const handleSignup = () => {
        navigate('/sign-up'); // redirect to the path of signup page
    }

    const handleLogout = () => setIsLoggedIn(false);

    const [email, setEmail] = useState();
    const [tickets, setTickets] = useState([]); // array
       
        
    useEffect(() => { 
        axios.get(userRoute).then(response => {
            let testEmail = response.data.slice(0, -1);
            testEmail = testEmail.replace(/%40/g, '@');
            setEmail(testEmail);
            if (testEmail) {
                // console.log("changing log status");
                setIsLoggedIn(true);
            }
            else console.log("notchanged");
            console.log("log?", isLoggedIn);
            return axios.get(apiRoute, {
                        params: 
                        {
                            email: testEmail
                        }
                    }).then(response => {
                        console.log(Object.entries(response.data)[0][1]);
                        setTickets(Object.entries(response.data)[0][1]);
                    }).catch(error => {
                        console.error('Error:', error);
                    });
        }).catch(error => console.error("Error receiving data: " + error));
        
    }, []);


    let content;
    if (isLoggedIn) {
        content = (
            <div className="profile-container1">
                <div className="welcome" style = {{fontSize : "3vw", textAlign : "left" , padding : "3%"}}>
                    <h1>Welcome!</h1>
                    <p>USC Email: <span>{email}</span></p>
                    <p>Password: ******</p>
                </div>

                <div className="profile-tickets-container">
                    <h2>Your Tickets:</h2>

                    <table className="profile-ticket-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ticket Type</th>
                            <th>Location</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>

                            {tickets.map((item, index) => (
                                console.log(item),
                                <tr key={index} className="ticket-item">
                                    {/* <td className="ticket-info">{`${item.user.firstName} ${item.user.lastName}`}</td> */}
                                    <td className="ticket-info">{item.event.eventName}</td>
                                    <td className="ticket-info">{item.ticketType}</td>
                                    <td className="ticket-info">{item.event.eventLocation}</td>
                                    <td className="ticket-info">{item.event.eventDate} {item.event.eventTime}</td>

                                    {/* <p className="ticket-info">Name: {item.user.firstName} {item.user.lastName}</p>
                                    <p className="ticket-info">Event: {item.event.eventName}</p>
                                    <p className="ticket-info">Location: {item.event.eventLocation}</p>
                                    <p className="ticket-info">Time: {item.event.eventTime}</p> */}
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                
                <button className="profile-logout-button" type="button" onClick={handleLogout}>Log Out</button>
            </div>
        );
    } else {
        content = (
            <div className="profile-container2">
                <p className="welcome-message" style = {{fontSize : "3vw", textAlign : "left" , padding : "3%"}}>Welcome!</p>
                <p style = {{fontSize : "2vw", textAlign : "left" , padding : "3%"}}>You are currently a guest user, please sign up or sign in for reservation and profile service.</p>
                
                <div className="profile-buttons-container">
                    <button className="profile-signin-button" type="button" onClick={handleLogin}>Sign in</button>
                    <button className="profile-signup-button" type="button" onClick={handleSignup}>Sign up</button>
                </div>

            </div>
        );
    }

    return (
        <div>
            <ProfileHeader />
            <br/>
			<br/>
            {content}
        </div>
    );
}

export default ProfilePage;
