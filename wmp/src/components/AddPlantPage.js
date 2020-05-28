//This page contains a form for adding a new plant to a user's list
//The info from this form will be used to create a new card on the dashboard page

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import {editPlant} from '../actions/PlantAction';


const AddProperty = props => {
  console.log(props)

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2oFrequency: '',    
    });

    useEffect(() => {
      if(props.isEditing === true){
        setPlant({
          ...plant, 
          nickname: props.plantToEdit.nickname,
          species: props.plantToEdit.species,
          h2oFrequency: props.plantToEdit.h2oFrequency
        })
      }
    }, [props.isEditing])

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

    if(props.isEditing === true){
      props.editPlant(props.plantToEdit.id, plant)
    } else {
      axiosWithAuth()
      .post(`/api/plants/`, plant)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
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
            <label htmlFor='h2oFrequency'> h2oFrequency:</label>
            <select
              id='h2oFrequency'
              name='h2oFrequency'
              onChange={handleSelectChanges}
              value={plant.h2oFrequency}
              required
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>

            <br />
            <button type='submit'> Submit Plant</button>
            {/* {console.log(props.isEditing, props.plantToEdit)} */}

        </form>
        <p> &#9400; 2020, Water My Plants</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isEditing: state.plantReducer.isEditing,
    plantToEdit: state.plantReducer.plantToEdit
  };
};

export default connect(mapStateToProps, {editPlant})(AddProperty);