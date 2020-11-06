import React from "react";
import "./card.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function PlanetCard({ id, name, climate, population }) {
  return (
    <div className="planetCard">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="planetCard__image"
        alt={name}
      />
      <div>
        <p>Climate: {climate}</p>
        <h3>{name}</h3>
        {/* <CardContent>
          <Typography variant="subtitle1" color="textSecondary">
            Population:{population}
          </Typography>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Climate:{climate}
          </Typography>
        </CardContent> */}
      </div>
    </div>
  );
}

export default PlanetCard;
