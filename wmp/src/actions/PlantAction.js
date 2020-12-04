import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_PLANT_START = 'FETCH_PLANT_START';
export const FETCH_PLANT_SUCCESS = 'FETCH_PLANT_SUCCESS';
export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';
export const DELETE_PLANT = 'DELETE_PLANT';
export const EDITING_PLANT = 'EDITING_PLANT';
export const EDIT_PLANT = 'EDIT_PLANT';
// export const FETCH_USER = 'FETCH_USER';

export const getPlant = userId => dispatch => {
  dispatch({ type: FETCH_PLANT_START });
  axiosWithAuth()
    .get(`/api/plants/`)
    .then(res => {
      dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.data });
    })
    .catch(error =>
      {
      console.error('error fetching data from api, error: ', error);
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from api' });
    }
    );
};

export const deletePlant = plantId => dispatch => {
  axiosWithAuth()
  .delete(`/api/plants/${plantId}`)
  .then(res => {
    dispatch({ type: DELETE_PLANT, payload: plantId})
      
  })
  .catch(err => console.log(err));
};

export const startEdit = (plantObj, redirect) => dispatch => {
  dispatch({ type: EDITING_PLANT, payload: plantObj })
  redirect()
}

export const editPlant = (plantId, plant) => dispatch => {
  axiosWithAuth()
  .put(`/api/plants/${plantId}`, plant)
  .then(res => {
    dispatch({ type: EDIT_PLANT, payload: res.data})
      
  })
  .catch(err => console.log(err));
}

// export const getUser = userName => dispatch => {
//   // dispatch({ type: FETCH_USER });
//   axiosWithAuth()
//     .get(`/api/user`)
//     .then(res => {
//       console.log('userName', res)
//       dispatch({ type: FETCH_USER, payload: res.data.username });
//     })
//     .catch(error => console.log('getUser', error));
// }

export const setUserId = userId => dispatch => {
  dispatch({ type: SET_USER, payload: userId });
};
