import React from "react";

import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  Dashboard,
  CheckOutPage,
  LandingPage,
  ManageProduct,
} from "./pages/";
import { Header, Cart, PrivateRoute, ProductList, Loading } from "./components";

import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {window.location.pathname === "/landing" ? null : <Header />}

      <div className="">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route path="/landing" component={LandingPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/products" component={ProductList} />
          <Route path="/product" component={ManageProduct} />
          <Route path="/product/:id" component={ManageProduct} />
        </Switch>
      </div>
    </>
  );
};

export default App;