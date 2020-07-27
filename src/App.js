import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
// import SignIn from "./components/SignIn/SignIn";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";

function App() {
  return (
    <div className="font-display text-gray-800">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-up" component={AuthenticationPage} />
        <Route path="/sign-in" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
