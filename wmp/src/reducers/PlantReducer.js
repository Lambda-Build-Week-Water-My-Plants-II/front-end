//plant reducer

import {
    UPDATE_PLANT,
    // ADD_PLANT
  } from '../actions';
  
  const initialState = {
    plant: {
      nickname: '',
      species: '',
      h2oFrequency: '',
    },
    plants: [],

    isFetchingData: false,
  };
  
  export const plantReducer = (state = initialState, action) => {
    switch (action.type) {
      // case ADD_PLANT:
      //   return {
      //     ...state,

      //   }
      case UPDATE_PLANT:
        return {
          ...state,
          plants: action.payload,
          isFetchingData: false
        };
      default:
        return state;
    }
  };