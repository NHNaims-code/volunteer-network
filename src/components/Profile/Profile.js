import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';

const Profile = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const [profile, setProfile] = useState([])
    // const [profileEvent, setProfileEvent] = useState([])
    
    fetch(`http://localhost:5000/user/${loggedInUser.email}`)
    .then(response => response.json())
    .then(data => {
        setProfile(data);
        console.log(data);
    })
    return (
        <div>
            <div style={{height: '380px', background: '#F8FAFC'}}>
            <div className="navbar navbar-expand-lg navbar-light bg-light container row mx-auto">
            <a className="navbar-brand col-5 text-left" href="#">
                <Link to='/'>
                <img height="50px" src={logo} alt="logo"/>
                </Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-7 " id="navbarText">
                <ul className="navbar-nav w-100 d-flex justify-content-between">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Donation</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                   <img style={{borderRadius: '50px', height:'30px'}} src={loggedInUser.photo} alt=""/>
                  
                </li>
                </ul>
            </div>
            </div>
            </div>

            <div className="row">
                {
                    profile.map(pro => 
                        <div className="p-3 col-md-6 d-flex">
                            <img className="mr-5" src={pro.imageUrl} height="250px" alt=""/>
                            <div className="">
                                <h2>{pro.eventTitle}</h2>
                                <p>{pro.date}</p>
                                <button className="btn btn-danger">Cancle</button>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Profile;