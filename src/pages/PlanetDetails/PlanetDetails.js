import React from "react";
import "./planetdetails.css";

import { useParams, useHistory } from "react-router-dom";

function PlanetDetails() {
  const { id } = useParams();
  const history = useHistory();

  const getBack = () => {
    history.push("/");
  };

  return (
    <div>
      <button onClick={getBack}>Get back to planets</button>
      <h1>PlanetDetails -> ID is -> {id}</h1>
    </div>
  );
}

export default PlanetDetails;
