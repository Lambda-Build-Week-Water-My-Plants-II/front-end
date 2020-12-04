//This is a component that shows the general info about the plant

//key information that should be on this card:
//plant name
//nickname
//species
//h2o frequency
//image//optional


import React from "react";
import {useHistory} from "react-router-dom"
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { getPlant, deletePlant, startEdit } from '../actions/PlantAction'




const PlantCard = props => {

    const {push} =  useHistory();

    const editPlant = (plantObj => {
      props.startEdit(plantObj, () => push('/new-plant'))
    })


  return (
    <div className='dashCard'>
      <div className='plantCard'>
        <h3>Name: {props.planty.nickname}</h3>
        <p>Species: {props.planty.species}</p>
        <p>Frequency: {props.planty.h2oFrequency}</p>
      </div>
    
      <div className='cardButtons'>
        <button onClick={() => editPlant(props.planty)} >Edit</button>

        <button onClick={() => props.deletePlant(props.planty.id)} > Delete </button>
      </div>

    </div>
  );
};

const mapStateToProps = state => {
    return {
      plant: state.plantReducer.plant,
    };
};
  
export default connect(
    mapStateToProps,
    {getPlant, deletePlant, startEdit}
    )(PlantCard);
