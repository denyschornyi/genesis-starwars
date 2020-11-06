import React from "react";
import numeral from "numeral";

export function PlanetInfo({ info }) {
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
          <p>Population: {numeral(population).format("0,0")}</p>
          <p>Rotation Period: {numeral(rotationPeriod).format("0,0")}</p>
          <p>Diameter: {numeral(diameter).format("0,0")}</p>
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
