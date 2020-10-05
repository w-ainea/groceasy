import React from "react";

import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  Dashboard,
  Accountsettings,
  CheckOutPage,
  LandingPage,
  AnalyticsPage,
} from "./pages/";
import { Header, Cart, PrivateRoute } from "./components";

class App extends React.Component {
  render() {
    return (
      <>
        {window.location.pathname === "/landing" ? null : <Header />}

        <div className="">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/cart" component={Cart} />
            <PrivateRoute path="/account" component={Accountsettings} />
            <PrivateRoute path="/checkout" component={CheckOutPage} />
            <Route path="/landing" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/analytics" component={AnalyticsPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
