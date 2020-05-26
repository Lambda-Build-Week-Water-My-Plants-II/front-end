//This is a component that shows the general info about the plant

//key information that should be on this card:
//plant name
//nickname
//species
//h2o frequency
//image//optional


import React from 'react';
import PropertyCard from './PropertyCard';
import { connect } from 'react-redux';
// import { Tween, Timeline } from 'react-gsap';

const PlantCardList = props => {

  return (
    <>
      {!props.error ? (
        !props.isFetchingData ? (
          <div>
            {props.plants.length > 0 ? (
                <div>
                    {props.plants.map(e => (
                        <PropertyCard property ={e} />
                        ))}
                </div>
            )
           : (
              <p>No Properties Added Yet</p>
            )}
          </div>
        ) : (
          <div>Fetching Data ... </div>
        )
      ) : (
        <div>Error Fetching Data</div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    properties: state.properties,
    isFetchingData: state.isFetchingData,
    error: state.error
  };
};

export default connect(mapStateToProps)(PlantCardList);
