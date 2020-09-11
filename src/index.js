import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./assets/css/main.css";
import "typeface-nunito";

// import { store, persistor } from "./redux";
import { Provider as ReduxProvider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./redux";

render(
  <ReduxProvider store={store}>
    <Router>
      <div className="font-display">
        {/* <PersistGate persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </div>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
