import React, { useEffect, useState } from "react";
import "./home.css";

import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

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
    <Container>
      <div className="app">
        {allPlanets &&
          allPlanets.map((planet) => {
            const id = planet.id;
            return (
              <Link to={"/" + id}>
                <PlanetCard
                  key={id}
                  id={planet.id}
                  name={planet.name}
                  climate={planet.climate}
                  population={planet.population}
                />
              </Link>
            );
          })}
      </div>
    </Container>
  );
}

export default Home;
