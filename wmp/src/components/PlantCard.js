//This is a component that shows the general info about the plant

//key information that should be on this card:
//plant name
//nickname
//species
//h2o frequency
//image//optional


import React from "react";
import {Link} from "react-router-dom"
// import { connect } from 'react-redux';



const PlantCard = props => {
    // console.log('plantcard', props)


  return (
    <div className='dashCard'>
      <h2>{props.plant.name}</h2>

      <p>Name: {props.plant.nickname}</p>
      <p>Species: {props.plant.species}</p>
      <p>Frequency: {props.plant.h20Frequency}</p>

      <Link to={`/new-plant/${props.plant.id}`} >
        <button>Edit</button>
      </Link>
        <button> Delete </button>
    </div>
  );
};

// const mapStateToProps = state => {
//     return {
//       plant: state.plantReducer.plant,
//       isFetchingData: state.plantReducer.isFetchingData,
//       error: state.plantReducer.error
//     };
//   };
  
  export default (PlantCard);
