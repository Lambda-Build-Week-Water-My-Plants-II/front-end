//This component is a container for PlantCard components

//map through an array of of objects and create a PlantCard for each

import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { getPlant } from '../actions/PlantAction'

const PlantCardList = props => {
    console.log('plantcardlist', props)

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

            : (<h3>No Plants &#127793;</h3>)}
          </div>
        ) : (
          <h3>Fetching Plants ... &#127793;</h3>
        )
      ) : (
        <h3>Welcome! Add A Plant To Begin &#127793;</h3>
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