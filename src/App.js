import React from "react";

import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  Dashboard,
  Accountsettings,
  CheckOutPage,
  LandingPage,
  ManageProduct,
} from "./pages/";
import { Header, Cart, PrivateRoute, ProductList } from "./components";

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
            <Route path="/checkout" component={CheckOutPage} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/products" component={ProductList} />
            <Route path="/product" component={ManageProduct} />
            <Route path="/product/:id" component={ManageProduct} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
