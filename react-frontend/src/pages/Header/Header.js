import "./header.css";

import { useState } from 'react';
import {Navigate} from"react-router-dom";

function Header() {
    const [show, setShow] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

    const [profile, setProfile] = useState(false);
    const [logOut, setLogOut] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const showDropDown = () => {
        if (show === true) {setShow(false);}
        else {setShow(true);}
    }

    const logOutFunction = () => {
        if (loggedIn == true) {setLoggedIn(false);}
        else {setLoggedIn(true);}
    }

    if (profile) { return <Navigate to="/profile"/> }
    if (logOut) { return <Navigate to="/"/> }
    if (signIn) {return <Navigate to="/"/>}
    if (signUp) { return <Navigate to="/sign-up"/> }


    return (
    <div>
        <div className = "header">
            <img src="/images/home_icon.png" alt="Home Image" className = "header-homeicon" onClick={logOutFunction}/>
            <p className = "header-text">Events</p>
            <img src="/images/profile_icon.png" alt="Profile Image" className = "header-profileicon" onClick={showDropDown}/>
        </div>

        {!show && (<div className = "white-space"/>)}
        
        {show && loggedIn && (<div className = "drop-down">
                    <p className='drop-down-item' onClick={() => {setProfile(true)}}>Profile</p>
                    <p className='drop-down-item' onClick={() => {setLogOut(true)}}>Log Out</p>
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