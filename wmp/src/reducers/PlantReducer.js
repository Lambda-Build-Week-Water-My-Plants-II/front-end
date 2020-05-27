//plant reducer

import {
    FETCH_PLANT_START,
    FETCH_PLANT_SUCCESS
  } from '../actions/PlantAction';
  
  const initialState = {
    plants: [],
    isFetchingData: false,
    error: '',
  };
  
  const plantReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PLANT_START:
        return {
          ...state,
          isFetchingData: true
        }
      case FETCH_PLANT_SUCCESS:
        return {
          ...state,
          plants: action.payload,
          isFetchingData: false,
          error: ''
        };
      default:
        return state;
    }
  };

  export default plantReducer;