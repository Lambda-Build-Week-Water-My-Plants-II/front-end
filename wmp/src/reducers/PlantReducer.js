//plant reducer

import {
    FETCH_PLANT_START,
    FETCH_PLANT_SUCCESS,
    SET_USER,
    SET_ERROR,
    DELETE_PLANT,
    EDITING_PLANT,
    EDIT_PLANT
  } from '../actions/PlantAction';
  
  const initialState = {
    plants: [],
    isFetchingData: false,
    error: '',
    isEditing: false,
    plantToEdit: {}
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

// import {
//   FETCH_DATA,
//   UPDATE_PROPERTIES,
//   SET_ERROR,
//   SET_USER,
//   OPTIMIZE_PRICE,
//   SET_PRICE,
//   ADD_PROPERTY
// } from '../actions';

// const initialState = {
//   userId: -1,
//   properties: [],
//   error: '',
//   isFetchingData: false,
//   updateProperties: []
// };

// const plantReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DATA:
//       return {
//         ...state,
//         isFetchingData: true
//       };
//     case UPDATE_PROPERTIES:
//       return {
//         ...state,
//         properties: action.payload,
//         isFetchingData: false
//       };
//     case SET_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//         isFetchingData: false
//       };
//     case SET_USER:
//       return {
//         ...state,
//         userId: action.payload
//       };
//     case OPTIMIZE_PRICE:
//       return {
//         ...state,
//         updateProperties: [...state.updateProperties, action.payload]
//       };
//     case SET_PRICE:
//       return {
//         ...state,
//         updateProperties: state.updateProperties.filter(
//           item => item !== action.payload.key
//         ),
//         properties: state.properties.map(item =>
//           item.id === action.payload.key
//             ? { ...item, price_estimate: action.payload.price }
//             : item
//         )
//       };
//     default:
//       return state;
//   }
// };

// export default plantReducer;
