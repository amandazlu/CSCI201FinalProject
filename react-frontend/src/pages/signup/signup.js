import React from "react";
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const navigate = useNavigate();
    
    const handleClick1 = async(e) => {
        navigate('/');
    };


    return (
        <div id="input-form">
            <h1>Create Account</h1>
            <form>
                <label>
                    <p>USC Email</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Sign Up</button>
                    <button type="button" onClick={handleClick1}>Back to Login</button>                    
                </div>
            </form>
        </div>
    );
};

export default Signup;