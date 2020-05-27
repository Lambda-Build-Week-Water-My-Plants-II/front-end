//This is a component that shows the general info about the plant

//key information that should be on this card:
//plant name
//nickname
//species
//h2o frequency
//image//optional


import React from "react";
import {Link} from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { getPlant } from '../actions/PlantAction'



const PlantCard = props => {
    console.log('plantcardy', props)

    const deletePlant = p => {
        console.log('delete got pushed')
    
        axiosWithAuth()
          .delete(`/api/plants/${p.id}`)
          .then(res => {
            console.log(res.data)
    
              axiosWithAuth()
                .get('/api/plants/')
                .then(res => {
                  console.log(res)
                //   updateColors(res.data)
                })
                .catch(err => console.log(err))
              
          })
          .catch(err => console.log(err));
    };


  return (
    <div className='dashCard'>
      <h2>{props.planty.name}</h2>

      <p>Name: {props.planty.nickname}</p>
      <p>Species: {props.planty.species}</p>
      <p>Frequency: {props.planty.h20Frequency}</p>

      <Link to={`/new-plant/${props.planty.id}`} >
        <button>Edit</button>
      </Link>
        <button onClick={deletePlant} > Delete </button>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      plant: state.plantReducer.plant,
    //   isFetchingData: state.plantReducer.isFetchingData,
    //   error: state.plantReducer.error
    };
};
  
export default connect(
    mapStateToProps,
    {getPlant}
    )(PlantCard);
