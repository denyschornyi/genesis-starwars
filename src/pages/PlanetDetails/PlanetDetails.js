import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./planetdetails.css";

import { PlanetInfo } from "./PlanetInfo";
import SwapiService from "../../service/SwapiService";

function PlanetDetails() {
  const [planetData, setPlanetData] = useState();
  const { id } = useParams();
  const history = useHistory();

  const SwapiData = new SwapiService();

  useEffect(() => {
    SwapiData.getPlanet(id).then((data) => setPlanetData(data));
  }, []);

  const getBack = () => {
    history.push("/");
  };

  const planet = planetData ? (
    <PlanetInfo info={planetData} />
  ) : (
    <h1 className="text-white">Planet if loading .....</h1>
  );
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12  mb-1">
          <button type="button" className="btn btn-dark" onClick={getBack}>
            Get back to planets
          </button>
        </div>
        {planet}
      </div>
    </div>
  );
}

export default PlanetDetails;
