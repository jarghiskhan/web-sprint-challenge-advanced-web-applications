//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
