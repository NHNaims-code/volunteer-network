import React, { useContext } from 'react';
import './Login.css'
import logo from '../../logos/logo.png'
import google from '../../logos/google.svg'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const googleSignInProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleSignInProvider)
        .then(res => {
            const {displayName, photoURL, email} = res.user;
            const newSignIn = {...loggedInUser}
            newSignIn.name = displayName;
            newSignIn.email = email;
            newSignIn.photo = photoURL;
            newSignIn.error = 'test for working';
            newSignIn.success = true;
            // const signedInUser = {
            //     isSignedIn: false,
            //     name: displayName,
            //     email: email,
            //     password:'',
            //     photo: photoURL,
            //     error: 'test for working',
            //     success: true,
            // }
            setLoggedInUser(newSignIn)
            history.replace(from)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div className="Login">
            <div className="header">
                <Link to="/">
                    <img src={logo} alt=""/>
                    </Link>
            </div>
            <div className="form mx-auto d-flex align-items-center justify-content-center">
                <div>
                <h3>Login With</h3>
                <div onClick={handleGoogleSignIn} className="googleLogin d-flex align-items-center ">
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