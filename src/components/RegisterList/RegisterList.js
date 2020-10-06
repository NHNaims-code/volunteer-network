import React, { useState } from 'react';

const RegisterList = () => {
    const [users, setUsers] = useState([])
    const token = sessionStorage.getItem('token');
    fetch('http://localhost:5000/users',{
        method: 'GET',
            headers: {
                "Authorization" : `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
    })
    .then(response => response.json())
    .then(data => setUsers(data))

    const deleteRegister = (email) =>{
        fetch('http://localhost:5000/delete/'+email, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className="headling d-flex w-100 justify-content-between">
                <p>Name</p>
                <p>Email ID</p>
                <p>Registration date</p>
                <p>Volunteer list</p>
                <p>Action</p>
            </div>
            {
                users.length?users.map(u => 
                    <div className="d-flex w-100 justify-content-between">
                        <p>{u.name}</p>
                        <p>{u.email}</p>
                        <p>{u.eventDate}</p>
                        <p>{u.eventTitle}</p>
                        <p onClick={()=>{deleteRegister(u.email)}} style={{color:'white', background:'red', padding:'1px 5px', borderRadius: '5px', cursor: 'pointer'}} className="delete"><i class="fa fa-trash" aria-hidden="true"></i></p>
                    </div>
                    ):<p>Please wait...</p>
            }
            
        </div>
    );
};

export default RegisterList;