import React from 'react';
import logo from '../../logos/logo.png'
import './Admin.css'

const Admin = () => {
    return (
        <div>
            <div className="row d-flex  mx-auto">
                <div className="col-3 d-flex justify-content-center pt-4">
                    <div className="text-left">
                        <img className="mb-5" height="35px" src={logo} alt=""/>
                        <p><span><i class="fa fa-users" aria-hidden="true"></i></span> Volunteer register list</p>
                        <p><span><i class="fa fa-plus" aria-hidden="true"></i></span> Add event</p>
                    </div>
                </div>
                <div className="col-9 info">
                    <div className="text-left p-4">
                        <h3 className="mb-3">Volunteer register list</h3>
                        <div className="list d-flex ">
                            <div className="list-form bg-white m-5 p-3">
                                <div className="headling d-flex w-100 justify-content-between">
                                    <p>Name</p>
                                    <p>Email ID</p>
                                    <p>Registration date</p>
                                    <p>Volunteer list</p>
                                    <p>Action</p>
                                </div>
                                <div className="p-3 d-flex w-100 justify-content-between">
                                    <p>Name</p>
                                    <p>Email ID</p>
                                    <p>Registration date</p>
                                    <p>Volunteer list</p>
                                    <p style={{color:'white', background:'red', padding:'1px 5px', borderRadius: '5px', cursor: 'pointer'}}><i class="fa fa-trash" aria-hidden="true"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;