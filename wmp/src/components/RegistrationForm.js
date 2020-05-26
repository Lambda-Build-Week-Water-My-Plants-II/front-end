//This component is a form used for creating a new pair of login credentials for a user that does not have an account yet
//form should have validation visible to user

import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RegistrationForm = props => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        phone_number: ''
    });


    const submitForm = e => {
        e.preventDefault();
        const userCredentials = { username: user.username, password: user.password, phone_number: user.phone_number }
        axiosWithAuth()
            .post('/api/auth/register', userCredentials)
            .then(res => {
                console.log(res)
                //registration success message here?
            })
            .catch( err => console.log(err) );

        let successMess = 'Registration Successful'
        setUser({...user, successMess})
        setTimeout(() => {
            props.setActive(true) 
        }, 1000)
            
    }

    return (
        <div>
         <h5>Register New User</h5>
            <form onSubmit={submitForm}>
          </form>
        </div>
    );
}
      
export default RegistrationForm;
    