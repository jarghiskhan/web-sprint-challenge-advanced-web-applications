import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
function App() {
  const handleLogout = (e) => {
    axiosWithAuth()
      .post("/logout")
      .then((response) => {
        console.log(response);
        localStorage.removeItem("token");
      });
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={handleLogout} href="/">
            logout
          </a>
        </header>
        <PrivateRoute path="/bubbles" component={BubblePage} />
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
