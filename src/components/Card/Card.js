import React from "react";
import numeral from "numeral";
import "./card.css";

function PlanetCard({ id, name, climate, population }) {
  const addDefaultSrc = (e) => {
    e.target.src =
      "https://i.pinimg.com/474x/95/a1/1e/95a11e4c1a9f8b713ef956b31b61fcfa.jpg";
  };

  return (
    <div className="planetCard mb-5">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="planetCard__image"
        alt={name}
        onError={addDefaultSrc}
      />
      <div className="p-2 bg-white planetCard__info">
        <h3>{name}</h3>
        <p>Climate: {climate}</p>
        <p>Population: {numeral(population).format("0,0")}</p>
      </div>
    </div>
  );
}

export default PlanetCard;
