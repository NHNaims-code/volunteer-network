import React, { useState } from 'react';

const RegisterList = () => {
    const [users, setUsers] = useState([])
    fetch('http://localhost:5000/users')
    .then(response => response.json())
    .then(data => setUsers(data))
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
                users.map(u => 
                    <div className="d-flex w-100 justify-content-between">
                        <p>{u.name}</p>
                        <p>{u.email}</p>
                        <p>{u.eventDate}</p>
                        <p>{u.eventTitle}</p>
                        <p style={{color:'white', background:'red', padding:'1px 5px', borderRadius: '5px', cursor: 'pointer'}}><i class="fa fa-trash" aria-hidden="true"></i></p>
                    </div>
                    )
            }
            
        </div>
    );
};

export default RegisterList;