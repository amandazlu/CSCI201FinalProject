import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.css"

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const User = (email, fname, lname, password, verified) => { return { email: email, fname: fname, lname: lname, password: password, verified: verified } }
    
    const handleClick1 = async(e) => {
        navigate('/');
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if(!CompareFields('password', 'password2')) return;
        try {
            // console.log('email: ', email);
            // console.log('password: ', password);
            const newUser = User(email, fname, lname, password, 1);
            const response = await axios.post('http://localhost:8080/api/v1/signup', null, {
                params: {
                    newUser,
                },
            });
            if (response.status === 200) {
                // Handle successful registration here
                navigate('/');
                console.log(response.data);
            } else {
                // Handle unsuccessful login
                setErrorMessage(response.data);
                console.error('Registration failed: ', response.data);
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
                setErrorMessage(error.response.data);
                console.error('Registration failed: ', error.response.data);
            }
            else{
                console.error('Error');
            }
        }
    };

    const handleChange = async (e) =>{

    }

    function CompareFields(f1, f2){
        var val1 = document.getElementById(f1).value;
        var val2 = document.getElementById(f2).value;
        val1 = val1.replace(/^\s*/,"");
        val1 = val1.replace(/\s*$/,"");
        if( val1.length == 0 ) { return true; }
        val2 = val2.replace(/^\s*/,"");
        val2 = val2.replace(/\s*$/,"");
        if( val2.length == 0 ) { return true; }
        if( val1 == val2 ) { return true; }
        // An alert box is used for verification failures.
        // The message may be changed as appropriate for your installation.
        // Or, replace alert(...) with your preferred error message system.
        alert("The passwords must match");
        return false;
    };


    return (
        <div >
            <div className="logoHeader">Ticket Pro</div>
            <div id="input-form">
                <h3>Create Account</h3>
                <form onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="email">USC Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="Password" id="password" type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="password2">Confirm Password</label>
                        <input name="Password2" id="password2" type="password" required/>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                        <button type="button" onClick={handleClick1}>Back to Login</button>                    
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Signup;