import * as React from "react";

import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  ShopPage,
  CheckOutPage,
  ManageProduct,
  AuthPage,
  AccountPage,
  SellersPage,
} from "./pages/";
import {
  Header,
  Cart,
  Loading,
  ProductForm,
  CreateShopForm,
  Seller,
} from "./components";

import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route exact path="/admin" component={AccountPage} />
          <Route exact path="/admin/create-shop" component={CreateShopForm} />
          <Route exact path="/admin/manage" component={ManageProduct} />
          <Route path="/admin/product-upload" component={ProductForm} />
          <Route path="/admin/products/new" component={ManageProduct} />
          <Route path="/admin/products/product/:id" component={ManageProduct} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/signin" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />
          <Route path="/sellers" component={SellersPage} />
          <Route path="/sellers/:id" component={Seller} />
        </Switch>

        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default App;
