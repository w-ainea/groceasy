import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "typeface-karla";
import "typeface-montserrat";

import "./assets/css/main.css";
import "./index.css";

import store from "./redux";
import { Provider as ReduxProvider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory";

render(
  <ReduxProvider store={store}>
    <Router>
      <div className="font-display">
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </div>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
