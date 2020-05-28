//This is the first page the user sees after leaving the marketing page
//User can either login or register from here (but only one is displayed at a time)

import React from 'react';
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';

function LoginPage() {
    return (
        <div>
        <h1>WATER MY PLANTS</h1>
        <div>
          <h2>Login</h2>
          <LoginForm/>
          <h3>Not a Member?</h3>
          <Link to= '/register' className= 'singUpButton'>Sign up!</Link>
        </div>
      </div>
    )

}


export default LoginPage;