//This page contains a form for adding a new plant to a user's list
//The info from this form will be used to create a new card on the dashboard page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

const AddProperty = props => {

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2oFrequency: '',    
    });

    const handleSelectChanges = e => {
      const valueSelected = parseInt(e.target.value);
      setPlant({ ...plant, [e.target.name]: valueSelected });
      console.log(e.target.name, valueSelected, plant);
    };

    const handleChanges = e => {
        setPlant({ ...plant, [e.target.name]: e.target.value });
        console.log(plant);
      };


  const submitForm = e => {
    e.preventDefault();
    console.log(plant);
    axiosWithAuth()
      .post(`/data/input/${window.localStorage.getItem('userId')}`, plant)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className='addProp'>
      <div className='return'>
        <Link to='/home'>return</Link>
      </div>
        <form onSubmit={submitForm}>
            <label htmlFor='name'> Name: </label>
            <input
              id='name'
              type='text'
              name='name'
              onChange={handleChanges}
              placeholder='Name'
              value={plant.nickname}
              required
            />
            <br />
            <label htmlFor='species'> Species: </label>
            <input
              id='species'
              type='text'
              name='species'
              onChange={handleChanges}
              placeholder='species'
              value={plant.species}
              required
            />
            <br />
            <label htmlFor='frequency'> h2oFrequency:</label>
            <select
              id='h20Frequency'
              name='h20Frequency'
              onChange={handleSelectChanges}
              value={plant.h2oFrequency}
              required
            >
              <option value='0'>Low</option>
              <option value='1'>Medium</option>
              <option value='2'>High</option>
            </select>

        </form>
        <p> &#9400; 2020, Water My Plants</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps, {})(AddProperty);