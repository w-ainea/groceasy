import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./assets/css/main.css";
import "typeface-nunito";

import { store, persistor } from "./redux";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
// import store from "./redux";

render(
  <ReduxProvider store={store}>
    <Router>
      <div className="font-display">
        <PersistGate persistor={persistor}>
          <Auth0Provider
            domain="dev-66wkr248.us.auth0.com"
            clientId="rI99LJA2vBIgQ7DRUqTslgyHXu8l3Lm7"
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </PersistGate>
      </div>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
