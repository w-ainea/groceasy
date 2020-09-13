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

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        {window.location.pathname === "/dashboard" ? (
          <Route path="/dashboard" component={Dashboard} />
        ) : (
          <div className="container mx-auto h-full md:grid grid-cols-4 text-gray-800 md:gap-24 absolute mt-20 md:ml-8">
            <Navbar className="md:col-span-1" />

            <div className="content col-span-3 mx-auto md:px-16 h-full md:ml-64 w-full">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Accountsettings} />
                <Route path="/checkout" component={CheckOutPage} />
              </Switch>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default App;
