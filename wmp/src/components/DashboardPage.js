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
import { getPlant } from '../actions/PlantAction';

const DashboardPage = props => {
  useEffect(() => {
    props.getPlant();
  }, [props]);

  return (
    <div className='dashboard'>
      <NavBar />

      <div className='cardStyle'>
        <PlantCardList />
      </div>

      <p> &#9400; 2020, Water My Plants</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // userId: state.userId,
    // properties: state.properties,
    // error: state.error,
    // isFetchingData: state.isFetchingData,
    // updateProperties: state.updateProperties
  };
};

export default connect(mapStateToProps, { getPlant })(DashboardPage);
// export default DashboardPage;