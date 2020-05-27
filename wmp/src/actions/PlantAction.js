import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_PLANT_START = 'FETCH_PLANT_START';
export const FETCH_PLANT_SUCCESS = 'FETCH_PLANT_SUCCESS';
export const SET_ERROR = 'SET_ERROR';
// export const SET_USER = 'SET_USER';

export const getPlant = userId => dispatch => {
  dispatch({ type: FETCH_PLANT_START });
  axiosWithAuth()
    .get(`/api/plants/`)
    .then(res => {
      console.log('get', res)
      dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.error('error fetching data from api, error: ', error);
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from api' });
    });
};