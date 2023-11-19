import React from 'react';
import './style.css';
import Header from "../Header";
import {useNavigate} from"react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();

    const tickets = [
        { name: 'Name#1', location: 'Location#1', time: 'Time#1'},
        { name: 'Name#2', location: 'Location#2', time: 'Time#2'},
        { name: 'Name#3', location: 'Location#3', time: 'Time#3'}
    ];

    return (
        <div>
            <Header/>
            <br/>
            <br/>

            <div className="container1">
                <div className="welcome">
                    <p>Welcome!</p>
                    <p>USC Email: <input type="email" value="USCEmail" disabled /></p>
                    <p>Password: <input type="password" value="******" disabled /></p>
                </div>

                <div className="ticket">
                    <p>Your Tickets:</p>
                    {tickets.map(
                        (ticket, index) => (
                            <div key={index}>{`${ticket.name} ${ticket.location} ${ticket.time}`}
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="container2">
                <p className="welcome-message">Welcome!</p>
                <p>You are currently a guest user, please sign up or sign in for reservation and profile service.</p>
                <button type="button">Sign in</button>
                <button type="button">Sign up</button>
            </div>

        </div>
    )
}

export default ProfilePage;