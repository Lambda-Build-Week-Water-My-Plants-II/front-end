//This component is a form used for creating a new pair of login credentials for a user that does not have an account yet
//form should have validation visible to user

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import formSchema from "../validation/formSchema";
import * as yup from "yup";
import {Link} from 'react-router-dom'

import './Registration.css';

const initialFormError = {
  username: "",
  password: "",
};
const initialDisabled = true;

const RegistrationForm = (props) => {
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [disabled, setDisabled] = useState(initialDisabled);
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    phone_number: "",
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

    const submitForm = e => {
        e.preventDefault();
        const userCredentials = { username: user.username, password: user.password, phone_number: user.phone_number }
        axiosWithAuth()
            .post('/api/auth/register', userCredentials)
            .then(res => {
                console.log(res)
                history.push("/");
            })
            .catch( err => console.log(err) );
    }

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
          setDisabled(!valid);
        });
      }, [user]);

  return (
    <div className="regForm">
      <h3>Welcome!</h3>
      <div className='formCard'>
      <div className='loginForm'>
      <p>Please fill out all required fields</p>
      <form onSubmit={submitForm}>
        <input
          value={user.username}
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChanges}
        />
        <div className="errors">{formErrors.username}</div>
        <input
          value={user.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChanges}
        />
        <div className="errors">{formErrors.password}</div>

        <input
          value={user.phone_number}
          name="phone_number"
          type="text"
          placeholder="(999)999-9999"
          onChange={handleChanges}
        />
        <button type="submit" disabled={disabled}>
          Register
        </button>

        <div>
            <h3>Already a member?</h3>
            <Link to= '/' className= 'singUpButton'>Login!</Link>
        </div>

      </form>
      </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
