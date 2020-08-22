import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./assets/css/main.css";
import "typeface-nunito";

render(
  <Router>
    <div className="font-display">
      <App />
    </div>
  </Router>,
  document.getElementById("root")
);
