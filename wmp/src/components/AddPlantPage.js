//This page contains a form for adding a new plant to a user's list
//The info from this form will be used to create a new card on the dashboard page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

const AddProperty = props => {
  console.log(props)

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2oFrequency: '',    
    });

    const handleSelectChanges = e => {
      const valueSelected = e.target.value;
      setPlant({ ...plant, [e.target.name]: valueSelected });
      console.log('fluffy', e.target.name, valueSelected, plant);
    };

    const handleChanges = e => {
        setPlant({ ...plant, [e.target.name]: e.target.value });
        console.log(plant);
      };


  const submitForm = e => {
    e.preventDefault();
    console.log(plant);
    axiosWithAuth()
      .post(`/api/plants/${window.localStorage.getItem('userId')}`, plant)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className='addPlant'>
      <div className='return'>
        <Link to='/home'>return</Link>
      </div>
        <form onSubmit={submitForm}>
            <label htmlFor='nickname'> Name: </label>
            <input
              id='nickname'
              type='text'
              name='nickname'
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
            <label htmlFor='h20Frequency'> h2oFrequency:</label>
            <select
              id='h20Frequency'
              name='h20Frequency'
              onChange={handleSelectChanges}
              value={plant.h2oFrequency}
              required
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>

            <br />
            <button type='submit'> Add Plant</button>

        </form>
        <p> &#9400; 2020, Water My Plants</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userId
  };
};

export default connect(mapStateToProps, {})(AddProperty);