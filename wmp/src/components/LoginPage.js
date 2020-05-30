//This is the first page the user sees after leaving the marketing page
//User can either login or register from here (but only one is displayed at a time)

import React from 'react';
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';
import './Login.css';

function LoginPage() {
  return (
    <div className='loginPage'>
      <h1>WATER MY PLANTS</h1>
      <div className='formCard'>
        <div className='loginForm'>
          <h2>Login</h2>
          <LoginForm/>
          <h3>Not a Member?</h3>
          <Link to= '/register' className= 'singUpButton'>Sign up!</Link>
        </div>
      <div className='footer' >
        <p> &#9400; 2020, Water My Plants</p>
      </div>
      </div>
    </div>
  )

}


export default LoginPage;