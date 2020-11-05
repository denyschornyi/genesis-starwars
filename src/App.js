import React, { useState, useEffect } from "react";
import "./App.css";

import SwapiService from "./service/SwapiService";

function App() {
  const SwapiData = new SwapiService();

  return <div className="App"></div>;
}

export default App;
