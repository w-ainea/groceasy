import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import { HomePage, ShopPage } from "./pages/";
import { Header } from "./components";
// import { SignUp, SignIn } from "./components";

const App = () => {
  return (
    <div className="h-screen mx-auto sm:grid grid-cols-3 text-gray-800">
      <Navbar className="sm:col-span-1" />
      <div className="content col-span-2 px-4 bg-gray-100">
        <Header />
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          {/* <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default App;
