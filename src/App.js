import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  Dashboard,
  Accountsettings,
  CheckOutPage,
} from "./pages/";
import { Header, Cart } from "./components";
// import { SignUp, SignIn } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto h-full md:grid grid-cols-4 text-gray-800 md:gap-24 absolute mt-20 md:ml-8">
        <Navbar className="md:col-span-1" />
        <div className="content col-span-3 mx-auto md:px-16 h-full md:ml-64 w-full">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/account" component={Accountsettings} />
            <Route exact path="/checkout" component={CheckOutPage} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
