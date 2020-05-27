//This component is a container for PlantCard components

//map through an array of of objects and create a PlantCard for each

import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { getPlant } from '../actions/PlantAction'
// import { Tween, Timeline } from 'react-gsap';

const PlantCardList = props => {
    console.log('plantcardlist', props)

  return (
    <>

    <div>
        {props.plant.map(e => (
            <PlantCard plant ={e} />
            ))}
    </div>
    
    <p>No Plants Added Yet</p>

    </>
  );
};

const mapStateToProps = state => {
  return {
    plant: state.plantReducer.plants,
    // isFetchingData: state.plantReducer.isFetchingData,
    // error: state.pantReducer.error
  };
};

export default connect(
    mapStateToProps,
    {getPlant}
    )(PlantCardList);