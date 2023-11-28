import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../modal/modal";
import "../style.css"

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
    const handleClick1 = async(e) => {
        navigate('/');
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if(!CompareFields('password', 'password2')){
            setErrorMessage("Passwords must match");
            return;
        } 
        try {
            // console.log('email: ', email);
            // console.log('password: ', password);
            const response = await axios.post('http://localhost:8080/api/v1/signup', null, {
                params: {
                    email,
                    fname,
                    lname,
                    password,
                },
            });
            if (response.status === 200) {
                // Handle successful registration here
                console.log(response.data);
                setSuccessMessage("Registration Successful!");
            } else {
                // Handle unsuccessful login
                setErrorMessage(response.data);
                console.error('Registration failed: ', response.data);
            }
        } catch (error) {
            if(error.response && (error.response.status === 401 || error.response.status === 409)){
                setErrorMessage(error.response.data);
                console.error('Registration failed: ', error.response.data);
            }
            else{
                console.error('Error');
            }
        }
    };

    function CompareFields(f1, f2){
        var val1 = document.getElementById(f1).value;
        var val2 = document.getElementById(f2).value;
        val1 = val1.replace(/^\s*/,"");
        val1 = val1.replace(/\s*$/,"");
        if( val1.length === 0 ) { return true; }
        val2 = val2.replace(/^\s*/,"");
        val2 = val2.replace(/\s*$/,"");
        if( val2.length === 0 ) { return true; }
        if( val1 === val2 ) { return true; }
        // An alert box is used for verification failures.
        // The message may be changed as appropriate for your installation.
        // Or, replace alert(...) with your preferred error message system.
        //alert("The passwords must match");
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
                {errorMessage && (
                    <Modal
                        primaryButtonClick={()=>setErrorMessage("")}
                        primaryButtonName='Okay'
                    >
                        <br />
                        <span style={{ color: 'red', fontSize: '24px', lineHeight: '72px' }}>Error Found: {errorMessage}</span>
                        <br />
                    </Modal>
                )}
                {successMessage && (
                    <Modal
                        primaryButtonClick={()=>{setSuccessMessage(""); handleClick1()}}
                        primaryButtonName='Back to Login'
                    >
                        <br />
                        <span style={{ color: 'green', fontSize: '24px', lineHeight: '72px' }}>{successMessage}</span>
                        <br />
                    </Modal>
                )}
            </div>
        </div>
    );
};


export default Signup;