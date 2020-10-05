import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import AllEvents from '../AllEvents/AllEvents';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Registration from '../Registration/Registration';

const Home = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <AllEvents></AllEvents>

        </div>
    );
};

export default Home;