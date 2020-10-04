import React from 'react';
import logo from '../../logos/logo.png';
import SemiNavbar from '../Navbar/SemiNavbar';


const Navbar = () => {
    return (
        <div style={{height: '380px', background: '#F8FAFC'}}>
            <div class="navbar navbar-expand-lg navbar-light bg-light container row mx-auto">
            <a class="navbar-brand col-5 text-left" href="#">
                <img height="50px" src={logo} alt="logo"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse col-7 " id="navbarText">
                <ul class="navbar-nav w-100 d-flex justify-content-between">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Donation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-primary px-4">Register</button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-dark px-4">Admin</button>
                </li>
                </ul>
            </div>
            </div>
            <SemiNavbar></SemiNavbar>
        </div>
    );
};

export default Navbar;