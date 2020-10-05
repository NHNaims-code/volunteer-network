import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import demoImage from '../../images/babySit.png'

const AllEvents = () => {
    const history = useHistory();
    const [events, setEvents] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])

    const goToRegister = (title, url) => {
        const newLoggedInUser = {...loggedInUser}
        // const eventTitle = title;
        newLoggedInUser.eventTitle = title; 
        newLoggedInUser.imageUrl = url; 
        setLoggedInUser(newLoggedInUser);
        console.log(loggedInUser);
        history.push('/register')
    }
    return (
        <div>
            <div className="row container mx-auto">

                {
                    events.map(event =>
                        // <Link to="/register">
                        <div onClick={()=>{goToRegister(event.title, event.url)}} className="card col-md-3 border-0 p-4">
                        <img height="220px" src={event.url} alt=""/>
                        <div className="card-footer p-4" style={{backgroundColor: `${event.color}`}}>
                            <p className="text-center text-white m-0">{event.title}</p>
                        </div>
                        </div>
                        // </Link>
                    )
                }
                
            </div>
             {/* <div className="row bg-dark">
            <div className="col-8 bg-warning">col-8</div>
            <div className="col-8 bg-danger">col-8</div>
                </div> */}
        </div>
    );
};

export default AllEvents;