import React from "react";
import "../style.css"
 
const Login = () => {
    return (
        <div id="input-form">
            <h1>
                Login
            </h1>
            <form>
                <div>
                    <label for="email" class="text-left">USC Email</label>
                    <input name="USC Email" id="email" type="text" />
                </div>
                <div>
                    <label for="pass" class="text-left">Password</label>
                    <input name="Password" id="pass" type="password" />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                    <button type="button">Sign Up</button>
                </div>
                <div>
                    <button type="button" className="guest-button">Continue As Guest</button>
                </div>
            </form>
        </div>
    );
};
 
export default Login;