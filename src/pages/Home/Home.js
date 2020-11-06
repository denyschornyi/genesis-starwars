import React, { useEffect, useState } from "react";
import "./home.css";

import { Link } from "react-router-dom";

import SwapiService from "../../service/SwapiService";
import PlanetCard from "../../components/Card/Card";

function Home() {
  const [allPlanets, setAllPlanets] = useState([]);

  const SwapiData = new SwapiService();

  useEffect(() => {
    SwapiData.getAllPlanets().then((data) => {
      setAllPlanets(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-lg-12 text-white text-center my-5">
          Pick a planet ↓
        </h1>
        {allPlanets &&
          allPlanets.map((planet) => {
            const { id, name, climate, population } = planet;
            return (
              <Link
                to={"/" + id}
                key={id}
                className="col-lg-4 col-md-6 col-sm-12"
              >
                <PlanetCard
                  id={id}
                  name={name}
                  climate={climate}
                  population={population}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
