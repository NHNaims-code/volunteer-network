import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

const AddEvent = () => {
    const [event, setEvent] = useState({})
    const handleInputField = (e) => {
        const newEvent = {...event};
        const name = e.target.name;
        const value = e.target.value;
        newEvent[name] = value;
        setEvent(newEvent);
        console.log(event);
    }
const eventSubmit = (e) => {
    const token = sessionStorage.getItem('token');
    fetch('https://quiet-spire-05247.herokuapp.com/addevent',{
        method: 'POST',
        headers: {
            "Authorization" : `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        alert('Event added successful')
        console.log(data);
    })
    e.preventDefault();
}
    return (
        <form onSubmit={eventSubmit} method="POST">
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="title"><h6>Title</h6></label>
                    <input type="text" onBlur={handleInputField} name="title" className="form-control" id="title" placeholder="Title" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description"><h6>Description</h6></label>
                    <textarea onBlur={handleInputField} name="description" className="form-control" id="description" rows="5" required></textarea>
                </div>
            </div>
            <div className="col-6">
            <div className="form-group">
                <label htmlFor="date"><h6>Event Date</h6></label>
                <input type="date" onBlur={handleInputField} className="form-control" name="date" id="date" default={new Date()} required/>
            </div>
            <div className="form-group">
                <label htmlFor="imgUrl"><h6>Image Url</h6></label>
                <input type="text" onBlur={handleInputField} name="url" id="imgUrl" className="form-control" placeholder="Enter your image url" required/>
            </div>
            <div className="form-group">
                <label htmlFor="color"><h6>BG color</h6></label>
                <input type="color" onBlur={handleInputField} name="color" id="color" className="form-control" placeholder="Enter event bg color" required/>
            </div>
                <div className="submit w-100 text-right">
                    <button type="submit" className="btn btn-primary text-right">Submit</button>
                </div>
            </div>
        </div>
        </form>
    );
};

export default AddEvent;