//actions for redux

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';

export const getData = userId => dispatch => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth()
    .get(`/data/output/${userId}`)
    .then(res => {
      dispatch({ type: UPDATE_PROPERTIES, payload: res.data });
    })
    .catch(error => {
      console.error('error fetching data from api, error: ', error);
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from api' });
    });
};

export const setUserId = userId => dispatch => {
  dispatch({ type: SET_USER, payload: userId });
};