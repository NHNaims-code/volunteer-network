import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png'
import './Registration.css'

const Registration = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registration, setRegistration] = useState({});
    if(!loggedInUser.eventTitle){
        history.push('/')
        alert('Please select event')
    }
    const handleBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newRegistration = {...loggedInUser}
        newRegistration[name] = value;
        setLoggedInUser(newRegistration);
    }

    const handleRegistration = (e) => {
        // const registrationData = { name: loggedInUser.name, profileImage: loggedInUser.photo, imageUrl: loggedInUser.imageUrl,...registration}
        console.log('resg',loggedInUser);
        fetch('http://localhost:5000/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loggedInUser)

        })
        .then(response => response.json())
        .then(result => {
            if(result){
                history.push('/profile')
                alert('Complete registration')
            }
        })
        e.preventDefault();
    }
    return (
        <div className="Login">
            <div className="header">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <form method="POST" onSubmit={handleRegistration}>
            <div className="registration mx-auto d-flex flex-column">
                <h3>Register as a Volunteer</h3>
                <input type="text" onBlur={handleBlur} name="name" placeholder="Full Name" value={loggedInUser.name} required/>
                <input type="email" onBlur={handleBlur} name="username" placeholder="Username or Email" value={loggedInUser.email} required/>
                <input type="date" onBlur={handleBlur} name="eventDate" placeholder="Date" required/>
                <input type="text" onBlur={handleBlur} name="description" placeholder="Description" required/>
                <input type="text" onBlur={handleBlur} name="organization" placeholder="Organize books at the library" value={loggedInUser.eventTitle} required/>
                <button type="submit" className="btn btn-primary mt-4">Registration</button>                
            </div>
            </form>
        </div>
    );
};

export default Registration;