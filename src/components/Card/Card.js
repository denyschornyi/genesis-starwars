import React from "react";
import "./card.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function PlanetCard({ id, name, climate, population }) {
  console.log(name);

  return (
    <Card className="planetCard">
      <div>
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary">
            Population:{population}
          </Typography>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Climate:{climate}
          </Typography>
        </CardContent>
      </div>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="planetCard__image"
        alt={name}
      />
    </Card>
  );
}

export default PlanetCard;
