import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../modal/modal";
import "../style.css"
 
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // console.log('email: ', email);
            // console.log('password: ', password);
            const response = await axios.post('http://localhost:8080/api/v1/login', null, {
                params: {
                    email,
                    password,
                },
            });
            if (response.status === 200) {
                // Handle successful login here, e.g., store token in local storage
                navigate('/event-home');
                console.log('Login successful');
            } else {
                // Handle unsuccessful login
                setErrorMessage(response.data);
                console.error('Login failed:', response.data);
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
                setErrorMessage(error.response.data);
                console.error('Login failed:', error.response.data);
            }
            else{
                setErrorMessage('Unknown error');
                console.error('Error');
            }
        }
    };
    
    const handleClick1 = async(e) => {
        navigate('/sign-up');
    };

    const handleClick2 = async(e) => {
        navigate('/event-home');
    };

    return (
        <div>            
            <div className="logoHeader">Ticket Pro</div>
            <div id="input-form">
                <h3>
                    Login
                </h3>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="text-left">USC Email</label>
                        <input name="USC Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-left">Password</label>
                        <input name="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {/* {errorMessage && <div className="error"> {errorMessage} </div>} */}
                    <div>
                        <button type="submit">Sign In</button>
                        <button type="button" onClick={handleClick1}>Create an Account</button>
                    </div>
                    <div>
                        <button type="button" className="guest-button" onClick={handleClick2}>Continue As Guest</button>
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
            </div>
        </div>
    );
};
 
export default Login;