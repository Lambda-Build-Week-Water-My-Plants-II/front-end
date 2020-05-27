//This component is a form to be used for logging in a user that already has an account
//form should have validation visible to user

import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUserId } from "../actions";

const LoginForm = (props) => {
  let history = useHistory();
  const [userPerson, setUserPerson] = useState({
    username: "",
    password: "",
    phone_number: "",
  });

  const handleChanges = (e) => {
    setUserPerson({
      ...userPerson,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userCredentials = {
      username: userPerson.email,
      password: userPerson.password,
      phone_number: userPerson.phone_number,
    };
    axiosWithAuth()
      .post('/api/auth/login', userCredentials)
      .then(res => {
        console.log(res);
        props.setUserId(res.data.user.id);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userId", res.data.user.id);
        history.push("/home");
      });
  };

  return (
    <form onSubmit={submitForm} className = 'logForm'>
      <input
        value={userPerson.username}
        name="username"
        type="text"
        placeholder="UserName1234"
        onChange = {handleChanges}
      />
      <input
        value={userPerson.password}
        name="password"
        type="text"
        placeholder="PassWord1234"
        onChange = {handleChanges}
      />
      <button>Login</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setUserId })(LoginForm);
