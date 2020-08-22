import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div className="h-screen mx-auto sm:grid grid-cols-3 text-gray-800">
      {window.location.pathname === "/signup" ||
      window.location.pathname === "/signin" ? null : (
        <Navbar className="sm:col-span-1" />
      )}

      <div className="content col-span-2 px-4 bg-gray-100">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
