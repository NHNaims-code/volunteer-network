import React from 'react';
import './Login.css'
import logo from '../../logos/logo.png'
import google from '../../logos/google.svg'
const Login = () => {
    return (
        <div className="Login">
            <div className="header">
                    <img src={logo} alt=""/>
            </div>
            <div className="form mx-auto d-flex align-items-center justify-content-center">
                <div>
                <h3>Login With</h3>
                <div className="googleLogin d-flex align-items-center ">
                  
                    <img height="35px" src={google} alt=""/>
                    
                    <h6 className="text-center w-100 h-100">Continue with Google</h6>
                </div>
                <p>Don't have an account? <a href="#">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;