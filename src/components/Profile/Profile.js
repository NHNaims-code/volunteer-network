import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';
import './Profile.css'

const Profile = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const [profile, setProfile] = useState([])
    const [profileDataChange, setProfileDataChange] = useState(true)
    // const [profileEvent, setProfileEvent] = useState([])
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        fetch(`http://localhost:5000/user/developernaim20@gmail.com`)
        .then(response => response.json())
        .then(data => {
            setProfile(data);
            console.log(data);
        })
    },[profileDataChange])

    const cancleEvent = (id)=>{
        fetch(`https://quiet-spire-05247.herokuapp.com/cancle/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                setProfileDataChange(!profileDataChange)  
                alert('Cancle successful') 
            }
        })
    }
    return (
        <div>
            <div style={{height: '180px', background: '#F8FAFC'}}>
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
                    <Link to="/">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a  onClick={()=>{alert('Cooming soon!')}}  className="nav-link" href="#">Donation</a>
                </li>
                <li className="nav-item">
                    <Link to="/">
                    <a className="nav-link" href="#">Events</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{alert('Cooming soon!')}} className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                   <img style={{borderRadius: '50px', height:'30px'}} src={loggedInUser.photo} alt=""/>
                </li>
                </ul>
            </div>
            </div>
           <h1 className="text-warning text-center"><span className="text-dark"> Welcome! </span>{loggedInUser.name}</h1>
            </div>
            <div className="row container mx-auto mt-5">
                {
                    
                    profile.length?profile.map(pro => 
                        <div className="col-md-5 d-flex justify-content-between your-events">
                            <img className="mr-5" src={pro.imageUrl} height="200px" alt=""/>
                            <div className="d-flex align-items-center">
                                <div>
                                <h2>{pro.eventTitle}</h2>
                                <p>{pro.eventDate}</p>
                                <button onClick={()=> {cancleEvent(pro._id)}} className="btn btn-danger">Cancle</button>
                                </div>
                            </div>
                        </div>
                        ):<h4 className="text-center text-muted w-100">( Your have no event right now )</h4>
                }
            </div>
        </div>
    );
};

export default Profile;