import React from "react";

import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  Dashboard,
  CheckOutPage,
  ManageProduct,
  AuthPage,
} from "./pages/";
import {
  Header,
  Cart,
  PrivateRoute,
  ProductList,
  Loading,
  ProductForm,
} from "./components";

import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/manage" component={ManageProduct} />
          <Route path="/admin/product-upload" component={ProductForm} />
          <Route exact path="/admin/products" component={ProductList} />
          <Route path="/product" component={ManageProduct} />
          <Route path="/product/:id" component={ManageProduct} />
          <Route path="/signin" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />
        </Switch>

        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default App;
