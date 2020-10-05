import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png'
import AddEvent from '../AddEvent/AddEvent';
import RegisterList from '../RegisterList/RegisterList';
import './Admin.css'

const Admin = () => {
    const [selected, setSelected] = useState(false)
    const handleAdmin = (a)=> {
        if(a === 'list'){
            setSelected(false)
        }
        if(a === 'add'){
            setSelected(true)
        }
    }
    return (
        <div>
            <div className="row d-flex  mx-auto">
                <div className="col-3 d-flex justify-content-center pt-4">
                    <div className="text-left">
                        <Link to='/'>
                        <img className="mb-5" height="35px" src={logo} alt=""/>
                        </Link>
                        <p onClick={()=>{handleAdmin('list')}}><span><i class="fa fa-users" aria-hidden="true"></i></span> Volunteer register list</p>
                        <p onClick={()=>{handleAdmin('add')}}><span><i class="fa fa-plus" aria-hidden="true"></i></span> Add event</p>
                    </div>
                </div>
                <div className="col-9 info">
                    <div className="text-left p-4">
                        <h3 className="mb-3">Volunteer register list</h3>
                        <div className="list d-flex ">
                            <div className="list-form bg-white m-5 p-3">
                                {
                                    selected?<AddEvent></AddEvent>:<RegisterList></RegisterList>
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;