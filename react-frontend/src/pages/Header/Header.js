import "./header.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import {useLocation, Navigate} from"react-router-dom";

const userRoute = "http://localhost:8080/api/v1/test"

function Header() {
    const [show, setShow] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

    const [profile, setProfile] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [goLogin, setLogin] = useState(false);
    const [home, setHome] = useState(false);

    useEffect(() => { 
        axios.get(userRoute).then(response => {
            let user = response.data.slice(0, -1);
            if (user === "null") {setLoggedIn(false);}
        }).catch(error => console.error("Error receiving data: " + error));
    }, []);

    const showDropDown = () => {
        if (show === true) {setShow(false);}
        else {setShow(true);}
    };

    const logOutFunction = () => {
        axios.post(userRoute, "null").then(response => {
                    console.log("Validate");
        });
        setLoggedIn(false);
        setLogin(true);
    };

    if (profile) { return <Navigate to="/profile"/> }
    if (signIn) {return <Navigate to="/"/>}
    if (signUp) { return <Navigate to="/sign-up"/> }
    if (goLogin) {return <Navigate to="/"/>}
    if (home) {return <Navigate to = "/"/>}

    return (
    <div>
        <div className = "header">
            <img src="/images/home_icon.png" alt="Home Image" className = "header-homeicon" onClick={() => {setHome(true)}}/>
            <p className = "header-text">Events</p>
            <img src="/images/profile_icon.png" alt="Profile Image" className = "header-profileicon" onClick={showDropDown}/>
        </div>

        {!show && (<div className = "white-space"/>)}
        
        {show && loggedIn && (<div className = "drop-down">
                    <p className='drop-down-item' onClick={() => {setProfile(true)}}>Profile</p>
                    <p className='drop-down-item' onClick={() => {logOutFunction()}}>Log Out</p>
                  </div>)
        }

        {show && !loggedIn && (<div className = "drop-down">
                    <p className='drop-down-item' onClick={() => {setSignIn(true)}}>Sign In</p>
                    <p className='drop-down-item' onClick={() => {setSignUp(true)}}>Sign Up</p>
                  </div>)
        }
    </div>
    );
}

export default Header;