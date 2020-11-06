import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./planetdetails.css";

import SwapiService from "../../service/SwapiService";

import Container from "@material-ui/core/Container";

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
  console.log(planetData);

  const planet = planetData ? (
    <PlanetInfo info={planetData} />
  ) : (
    <h1 style={{ color: "white" }}>Planet if loading .....</h1>
  );
  return (
    <Container>
      <button onClick={getBack}>Get back to planets</button>
      {planet}
      {/* <h2>{name}</h2>
      <h2>{climate}</h2>
      <h2>{diameter}</h2>
      <h2>{gravity}</h2>
      <h2>{population}</h2>
      <h2>{rotationPeriod}</h2>
      <h2>{terrain}</h2> */}
    </Container>
  );
}

export default PlanetDetails;

function PlanetInfo({ info }) {
  return <h1 style={{ color: "white" }}>{info.name}</h1>;
}
