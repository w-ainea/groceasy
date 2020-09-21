import React from "react";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  Dashboard,
  Accountsettings,
  CheckOutPage,
  LandingPage,
} from "./pages/";
import { Header, Cart, PrivateRoute } from "./components";

class App extends React.Component {
  render() {
    return (
      <>
        {window.location.pathname !== "/dashboard" ? <Header /> : null}
        {window.location.pathname === "/dashboard" ? (
          <PrivateRoute path="/dashboard" component={Dashboard} />
        ) : (
          <div className="container mx-auto h-full md:grid grid-cols-4 text-gray-800 md:gap-24 absolute mt-20 md:ml-8">
            <Navbar className="md:col-span-1" />

            <div className="content col-span-3 mx-auto md:px-16 h-full md:ml-64 w-full">
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute path="/shop" component={ShopPage} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/account" component={Accountsettings} />
                <PrivateRoute path="/checkout" component={CheckOutPage} />
                <PrivateRoute path="/landing" component={LandingPage} />
              </Switch>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default App;
