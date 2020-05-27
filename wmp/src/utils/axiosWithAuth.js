import axios from 'axios';

export const axiosWithAuth = () => {
  // const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoidGVzdCIsImlkIjo0LCJpYXQiOjE1OTA1OTU4NjMsImV4cCI6MTU5MTIwMDY2M30.nk7GxhddzW7i1qh9J8eRzldSuVlokqGhgE14VcyDHz8"
    },
    baseURL: 'https://limitless-earth-34461.herokuapp.com'
  });
};