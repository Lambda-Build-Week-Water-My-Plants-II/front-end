
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import AddPlantPage from "./components/AddPlantPage";

import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegistrationForm} />
            <PrivateRoute path="/home" component={DashboardPage} />
            <PrivateRoute path="/new-property" component={AddPlantPage} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;

