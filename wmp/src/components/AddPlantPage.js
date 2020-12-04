//This page contains a form for adding a new plant to a user's list
//The info from this form will be used to create a new card on the dashboard page

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import {editPlant} from '../actions/PlantAction';
import { useHistory } from "react-router-dom";

import './AddPlantPage.css';


const AddPlant = props => {
  console.log(props)
  let history = useHistory();

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
    
  };

  const handleChanges = e => {
      setPlant({ ...plant, [e.target.name]: e.target.value });
      
    };


  const submitForm = e => {
    e.preventDefault();
    

    if(props.isEditing === true){
      props.editPlant(props.plantToEdit.id, plant)
      history.push("/home");
    } else {
      axiosWithAuth()
      .post(`/api/plants/`, plant)
      .then(res => {
        history.push("/home");
      })
      .catch(err => console.log(err));
      
    }
  };

  return (
    <div className='addPlant'>

      <div className='return'>
        <Link to='/home'><button> return</button></Link>
      </div>

      <div className='anotherDiv'>
        <div className='form'>
          <form onSubmit={submitForm}>
              <label htmlFor='nickname'></label>
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
              <label htmlFor='species'></label>
              <input
                id='species'
                type='text'
                name='species'
                onChange={handleChanges}
                placeholder='Species'
                value={plant.species}
                required
              />
              <br />
              <label htmlFor='h2oFrequency'> h2o Frequency:</label>
              <select
                id='h2oFrequency'
                name='h2oFrequency'
                onChange={handleSelectChanges}
                value={plant.h2oFrequency}
                required
              >
                <option>Select Option</option>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>

              <button type='submit'> Submit Plant</button>
          </form>
        </div>
        <div className='footer'>
          <p> &#9400; 2020, Water My Plants</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isEditing: state.plantReducer.isEditing,
    plantToEdit: state.plantReducer.plantToEdit
  };
};

export default connect(mapStateToProps, {editPlant})(AddPlant);