import React, { Component } from "react";
import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="font-display text-gray-800">
        {window.location.pathname !== "/" ? (
          <Navbar currentUser={this.state.currentUser} />
        ) : null}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-up" component={AuthenticationPage} />
          <Route path="/sign-in" component={AuthenticationPage} />
          <Route path="/dashboad" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
