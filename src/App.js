import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import { HomePage, ShopPage, Dashboard, Accountsettings } from "./pages/";
import { Header, Cart } from "./components";
// import { SignUp, SignIn } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto h-full sm:grid grid-cols-4 text-gray-800 sm:gap-24 absolute mt-20">
        <Navbar className="sm:col-span-1" />
        <div className="content col-span-3 px-4 h-full sm:ml-64 w-full">
          <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/account" component={Accountsettings} />
            {/* <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} /> */}
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
