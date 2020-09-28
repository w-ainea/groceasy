import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
// import { LandingPage } from "../../pages";

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <h1>Redirecting to the login page</h1>,
    })}
    {...args}
  />
);

export default PrivateRoute;
