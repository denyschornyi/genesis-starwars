import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./planetdetails.css";

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
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-5 mb-1">
          <button onClick={getBack}>Get back to planets</button>
        </div>
        {planet}
      </div>
    </div>
  );
}

export default PlanetDetails;

function PlanetInfo({ info }) {
  const {
    name,
    climate,
    population,
    rotationPeriod,
    diameter,
    gravity,
    terrain,
    residents
  } = info;
  return (
    <div className="col-lg-6 offset-lg-3 text-center planetInfo__wrapper">
      <img
        src="https://raw.githubusercontent.com/mfazevedo/StarWarsPlanets/master/public/logo.png"
        alt="Star Wars"
      />
      <p className="text-white font-weight-bold">Planet's Info</p>
      <div className="planetInfo">
        <h2 className="planetInfo__name">{name}</h2>
        <div className="planetInfo_details text-left p-4">
          <p>Climate: {climate}</p>
          <p>Population: {population}</p>
          <p>Rotation Period: {rotationPeriod}</p>
          <p>Diameter: {diameter}</p>
          <p>Gravity: {gravity}</p>
          <p>Terrain: {terrain}</p>
          {residents.length === 0 ? (
            ""
          ) : (
            <h5 className="text-center">Famous residents</h5>
          )}
          <div className="planetInfo_residents">
            {residents &&
              residents.map((resident) => {
                const id = resident.match(/\/([0-9]*)\/$/)[1];
                return (
                  <img
                    key={id}
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="Person"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
