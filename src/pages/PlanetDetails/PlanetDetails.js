import React from "react";
import "./planetdetails.css";

import { useParams } from "react-router-dom";

function PlanetDetails() {
  let { id } = useParams();
  return (
    <div>
      <h1>PlanetDetails -> ID is -> {id}</h1>
    </div>
  );
}

export default PlanetDetails;
