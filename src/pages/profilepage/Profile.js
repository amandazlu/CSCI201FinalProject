import React from 'react';
import './style.css';
import Header from "../Header";
import {useNavigate} from"react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <br/>
            <br/>

        <div className="container">
            <div className="welcome">
                <p>Welcome!</p>
                <p>USC Email: <input type="email" value="USCEmail" disabled /></p>
                <p>Password: <input type="password" value="******" disabled /></p>
            </div>

            <div className="ticket">
                <p>Your Tickets:</p>
                <div>Name#1 Location#1 Time#1</div>
                <div>Name#2 Location#2 Time#2</div>
                <div>Name#3 Location#3 Time#3</div>
            </div>
        </div>
        </div>
    )
}

export default ProfilePage;
