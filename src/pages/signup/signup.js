import React from "react";

const Signup = () => {
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
                </div>
            </form>
        </div>
    );
};

export default Signup;