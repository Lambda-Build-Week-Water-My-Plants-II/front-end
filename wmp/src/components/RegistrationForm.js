//This component is a form used for creating a new pair of login credentials for a user that does not have an account yet
//form should have validation visible to user

import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const RegistrationForm = (props) => {
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

  return (
    <div className = 'regForm'>
      <h3>Welcome!</h3>
      <p>Please fill out all required fields</p>
     <form onSubmit={submitForm}>
        <input
          value={user.username}
          name="username"
          type="text"
          placeholder="Username" 
          onChange = {handleChanges}
        />
        <input
          value={user.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChanges}
        />
        <input
          value={user.phone_number}
          name="phone_number"
          type="text"
          placeholder="(999)999-9999"
          onChange= {handleChanges}
        />
        <button type='submit'>Register</button>
      </form>
     </div>
  );
};

export default RegistrationForm;
