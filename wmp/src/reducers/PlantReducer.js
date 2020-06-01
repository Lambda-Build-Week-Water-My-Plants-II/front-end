//plant reducer

import {
  FETCH_PLANT_START,
  FETCH_PLANT_SUCCESS,
  SET_USER,
  SET_ERROR,
  DELETE_PLANT,
  EDITING_PLANT,
  EDIT_PLANT,
  // FETCH_USER
} from '../actions/PlantAction';
  
const initialState = {
  plants: [],
  isFetchingData: false,
  error: '',
  isEditing: false,
  plantToEdit: {},
  userId: '',
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
    case DELETE_PLANT:
      return {
        ...state,
        plants: [...state.plants.filter(plant => {
          return plant.id !== action.payload
        })]
      }
    case EDITING_PLANT:
      return {
        ...state,
        isEditing: true,
        plantToEdit: {...state.plantToEdit, ...action.payload}
      }
    case EDIT_PLANT:
      return {
        ...state,
        isEditing: false,
        plantToEdit: {},
        plants: [...state.plants.map(plant => {
          if(plant.id === action.payload.id){
            return action.payload
          } else {
            return plant
          }
        })]
      }
    // case FETCH_USER:
    //   return {
    //     ...state,
    //     userName: action.payload
    //   }
    case SET_USER:
      return {
        ...state,
        userId: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetchingData: false
      };
    default:
      return state;
  }
};

export default plantReducer;