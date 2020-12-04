//This is the element on the DashboardPage that holds buttons for user actions
//User should be able to logout and create a new property from here
//create buttons for each of those actions

import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { connect } from 'react-redux';
// import { setUserId } from "../actions/PlantAction";

import './navbar.css';


const Navbar = () => {
  const history = useHistory();
  const [name, setName] = useState('')
  // console.log('username state', name)

  useEffect(() => {
    axiosWithAuth()
      .get('/api/user')
      .then(res => {
        setName(res.data.username)
      })
      .catch(err => console.log(err))
  }, [setName]);

  const newPlant = e => {
    history.push("/new-plant");
  }

  const logout = e => {
    e.preventDefault();
    window.localStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <div>
      <div className="NavBar">
        <h1>Water My Plants</h1>   

        <h3>Welcome {name} <div className="kiwi"><span role='img' aria-label='kiwi'> &#129373;</span> </div></h3>
        
  
        <div className='linky'>
          <button onClick={newPlant}>New Plant</button>
        </div>

        <div className='logout'>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// const mapStateToProps = (state) => {
//   return {
//     userName: state.plantReducer.userId
//   };
// };

// export default connect(mapStateToProps, { setUserId })(Navbar);