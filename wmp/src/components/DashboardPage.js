//This page should contain the most important information the user will want to see
//Main element of this page is displaying the user's plants
//be able to add a plant on this page

//components contained in this page:
//Navbar
//PlantCardList

import React, { useEffect } from 'react';
import NavBar from './NavBar';

import PlantCardList from './PlantCardList';

import { connect } from 'react-redux';
import { getData } from '../actions';

const DashboardPage = props => {
//   useEffect(() => {
//     props.getData(window.localStorage.getItem('userId'));
//   }, [props.updateProperties]);

  return (
    <div className='dashboard'>
      <NavBar />

      <div className='cardStyle'>
          <PlantCardList />
      </div>
      <h1>dashboard</h1>

        <p> &#9400; 2020, Water My Plants</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userId,
    properties: state.properties,
    error: state.error,
    isFetchingData: state.isFetchingData,
    updateProperties: state.updateProperties
  };
};

export default connect(mapStateToProps, { getData })(DashboardPage);