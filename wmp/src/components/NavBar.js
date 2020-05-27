//This is the element on the DashboardPage that holds buttons for user actions
//User should be able to logout and create a new property from here
//create buttons for each of those actions

import React from "react";
import { Link, useHistory } from "react-router-dom";

import './navbar.css';

const Navbar = () => {

  const history = useHistory();
  const logout = e => {
    e.preventDefault();
    window.localStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <div>
      <div className="NavBar">
            <h1>Water My Plants</h1>   
     
            <div className='linky'>
              <Link to={`/new-plant`}>New Plant</Link>
            </div>

            <div className='linky'>
              <a onClick={logout}>Logout</a>
            </div>
      </div>
    </div>
  );
};

export default Navbar;