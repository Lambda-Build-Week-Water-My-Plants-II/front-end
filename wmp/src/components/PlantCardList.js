//This component is a container for PlantCard components

//map through an array of of objects and create a PlantCard for each

import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { getPlant } from '../actions/PlantAction'

const PlantCardList = props => {

  return (
    <div className='plantList'>
      {!props.error ? (
        !props.isFetchingData ? (
          <div>
            {props.plant.length > 0 ?
            <div className='mainCard'>
              {props.plant.map(plant => (
                  <PlantCard key={plant.id} planty ={plant} />
              ))}
            </div>

            : (<h2>No Plants <span role='img' aria-label='checked'>&#127793;</span></h2>)}
          </div>
        ) : (
          <h2>Fetching Plants ... <span role='img' aria-label='checked'>&#127793;</span></h2>
        )
      ) : (
        <h2>Welcome! Add A Plant To Begin <span role='img' aria-label='checked'>&#127793;</span></h2>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    plant: state.plantReducer.plants,
    isFetchingData: state.plantReducer.isFetchingData,
    error: state.plantReducer.error
  };
};

export default connect(
    mapStateToProps,
    {getPlant}
    )(PlantCardList);