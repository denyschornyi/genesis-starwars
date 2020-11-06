import React, { useState, useEffect } from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import PlanetDetails from "../../pages/PlanetDetails/PlanetDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<PlanetDetails />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
