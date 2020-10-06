import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';



const Navbar = () => {
    return (
        <div style={{height: '150px', background: '#F8FAFC'}}>
            <div className="navbar navbar-expand-lg navbar-light bg-light container row mx-auto">
            <a className="navbar-brand col-5 text-left" href="#">
                <img height="50px" src={logo} alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-7 " id="navbarText">
                <ul className="navbar-nav w-100 d-flex justify-content-between">
                <li className="nav-item active">
                    <Link to='/'>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{alert('Cooming soon!')}} className="nav-link" href="#">Donation</a>
                </li>
                <li className="nav-item">
                    <Link to='/'>
                    <a className="nav-link" href="#">Events</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a onClick={()=>{alert('Cooming soon!')}} className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                    <Link to="/register">
                    <button className="btn btn-primary px-4">Register</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin">
                    <button className="btn btn-dark px-4">Admin</button>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;