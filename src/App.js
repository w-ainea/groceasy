import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-display text-gray-800">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
