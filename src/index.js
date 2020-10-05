import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./assets/css/main.css";
import "typeface-nunito";

import { store, persistor } from "./redux";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory";


render(
  <ReduxProvider store={store}>
    <Router>
      <div className="font-display">
        <PersistGate persistor={persistor}>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </PersistGate>
      </div>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
