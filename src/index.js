import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./assets/css/main.css";
import "typeface-poppins";

import store from "./redux";
import { Provider as ReduxProvider } from "react-redux";

render(
  <ReduxProvider store={store}>
    <Router>
      <div className="font-display">
        <App />
      </div>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
