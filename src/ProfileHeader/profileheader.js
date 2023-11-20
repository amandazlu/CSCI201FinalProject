import "./profileheader.css";

import { useState } from 'react';
import {Navigate} from"react-router-dom";

function Header() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [logOut, setLogOut] = useState(false);

    const showDropDown = () => {
        if (show === true) {setShow(false);}
        else {setShow(true);}
    }

    if (profile) { return <Navigate to="/profile"/> }
    if (logOut) { return <Navigate to="/logout"/> }

    return (
    <div>

        <div className = "header">
            <img src="/images/home_icon.png" alt="Home Image" className = "header-homeicon"/>
            <p className = "header-text">Profile</p>
            <img src="/images/profile_icon.png" alt="Profile Image" className = "header-profileicon" onClick={showDropDown}/>
        </div>

        {!show && (<div className = "white-space"/>)}
        
        {show && (<div className = "drop-down">
                    <p className='drop-down-item' onClick={() => {setProfile(true)}}>Profile</p>
                    <p className='drop-down-item' onClick={() => {setLogOut(true)}}>Log Out</p>
                  </div>)
        }


    </div>
    );
}

export default Header;