import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import demoImage from '../../images/babySit.png'

const AllEvents = () => {
    const history = useHistory();
    const [events, setEvents] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [searchText, setSearchText] = useState('')
    const [url, setUrl] = useState('')
    useEffect(()=>{
        fetch('https://quiet-spire-05247.herokuapp.com/events')
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
   
    
    const handleSearchText = (e) => {
        const text = e.target.value;
        setSearchText(text);
    };

    const handleSearch = () => {
        searchText && fetch('https://quiet-spire-05247.herokuapp.com/search?search='+searchText)
        .then(response => response.json())
        .then(data => setEvents(data))
        console.log(searchText);
    }

    return (
        <div>


        <div className="pt-4 pb-4" style={{background: '#F8FAFC'}}>
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="input-group mb-3 mt-4 w-25 mx-auto">
                <input type="text"onChange={handleSearchText} className="form-control" placeholder="search..." aria-label="search..." aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <span onClick={handleSearch} className="input-group-text bg-primary text-white" id="basic-addon2">Search</span>
                </div>
            </div>
        </div>

            <div className="row container mx-auto">
                {
                    events.length?
                    events.map(event =>
                        <div onClick={()=>{goToRegister(event.title, event.url)}} className="card col-md-3 border-0 p-4">
                        <img height="220px" src={event.url} alt=""/>
                        <div className="card-footer p-4" style={{backgroundColor: `${event.color}`}}>
                            <p className="text-center text-white m-0">{event.title}</p>
                        </div>
                        </div>
                    ):<h3 className="text-center w-100 text-dark mt-5">( event not found! )</h3>
                }
                
            </div>
        </div>
    );
};

export default AllEvents;