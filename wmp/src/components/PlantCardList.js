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
      {!props.error ? (
        !props.isFetchingData ? (
          <div>
            {props.plant.length > 0 ?
            <div className='mainCard'>
              {props.plant.map(plant => (
                  <PlantCard key={plant.id} planty ={plant} />
              ))}
            </div>

            : (<h4>No Plants Added Yet</h4>)}
          </div>
        ) : (
          <h4>Fetching Plants ...</h4>
        )
      ) : (
        <h4>Welcome! Add A Plant To Begin</h4>
      )

      }

    </>
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