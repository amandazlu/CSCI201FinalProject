import React, { useState, useEffect } from 'react';
import axios from 'axios'; // install axios to make an HTTP request to your Spring Boot backend
import './style.css';
import ProfileHeader from "../ProfileHeader/profileheader";
import { useNavigate } from "react-router-dom";

const apiRoute = "http://localhost:8080/api/v1/profile/";
const userRoute = "http://localhost:8080/api/v1/test"

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Initialize logged-in state as false
    // const [tickets, setTickets] = useState([]); // declare a state variable named tickets in a functional React component, initialized to an empty array, with a setter method setTickets to update its value.

    // Dummy function to simulate login/logout
    // const handleLogin = () => setIsLoggedIn(true);

    const handleLogin = () => {
        navigate('/'); // redirect to the path of login page
    };

    const handleSignup = () => {
        navigate('/sign-up'); // redirect to the path of signup page
    }

    const handleLogout = () => setIsLoggedIn(false);

    const [email, setEmail] = useState();
    const [tickets, setTickets] = useState([]);

    /*
    const tickets = [
        { name: 'Name#1', location: 'Location#1', time: 'Time#1'},
        { name: 'Name#2', location: 'Location#2', time: 'Time#2'},
        { name: 'Name#3', location: 'Location#3', time: 'Time#3'}
    ];
    */

       
        // useEffect(() => {
        //     axios.get(apiRoute)
        //       .then(response => {
        //         // Assuming response.data is an array of objects
        //         // const user = response.data.find(event => event.id === id);
        //         // setEventData(event);
        //         // console.log(event);
        //       })
        //       .catch(error => {
        //         console.log('Error fetching data:', error);
        //       });
        // }, [id]);
       
       
        
    useEffect(() => { 
        axios.get(userRoute).then(response => {
            let testEmail = response.data.slice(0, -1);
            testEmail = testEmail.replace(/%40/g, '@');
            setEmail(testEmail);
            return axios.get(apiRoute, {
                        params: {
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

    // useEffect(() => {
    //     const fetchTickets = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/api/v1/profile`);
    //             console.log(response.data);
    //             // Assuming the response contains a map with email as key and tickets as value
    //             const userEmail = Object.keys(response.data)[0]; // Get the first key (email)
    //             setTickets(response.data[userEmail]); // Set tickets
    //             setEmail(userEmail); // Set email
    //         } catch (error) {
    //             console.error("Error fetching tickets", error);
    //         }
    //     };

    //     if (isLoggedIn) {
    //         fetchTickets();
    //     }
    // }, [isLoggedIn]);

    let content;
    if (isLoggedIn) {
        content = (
            <div className="container1">
                <div className="welcome">
                    <p>
                    {tickets.map(item => (
                        <div>
                        <p>ID: {item.ticketType}</p>
                        </div>
                    ))}
                    </p>
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
                <p className="welcome-message" style = {{fontSize : "3vw", textAlign : "left" , padding : "3%"}}>Welcome!</p>
                <p style = {{fontSize : "2vw", textAlign : "left" , padding : "3%"}}>You are currently a guest user, please sign up or sign in for reservation and profile service.</p>
                <button type="button" onClick={handleLogin}>Sign in</button>
                <button type="button" onClick={handleSignup}>Sign up</button>
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
