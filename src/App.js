import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path="/register">
          <Registration/>
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile></Profile>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
