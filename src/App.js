import React, { useState, useEffect } from "react";
import "./App.css";

import { getAllPlanets } from "./service/getData";

function App() {
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    getAllPlanets().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">hey</header>
    </div>
  );
}

export default App;
