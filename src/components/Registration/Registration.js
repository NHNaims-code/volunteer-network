import React from 'react';
import logo from '../../logos/logo.png'
import './Registration.css'

const Registration = () => {
    return (
        <div className="Login">
            <div className="header">
                    <img src={logo} alt=""/>
            </div>
            <div className="registration mx-auto d-flex flex-column">
                <h3>Register as a Volunteer</h3>
                <input type="text" name="name" placeholder="Full Name"/>
                <input type="email" name="username" placeholder="Username or Email"/>
                <input type="text" name="date" placeholder="Date"/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="text" name="organization" placeholder="Organize books at the library"/>
                <button className="btn btn-primary mt-4">Registration</button>                
            </div>
        </div>
    );
};

export default Registration;