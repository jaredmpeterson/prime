import React from "react";

import classes from "./RecipeCard.css";

const RecipeCard = props => {
  return (
    <div className={classes.RecipeCard}>
      <img src={`public/img/${props.picture}`} alt={props.title} />
      <div className={classes.Text}>
        <h3>{props.title}</h3>
        <h4>{props.category}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
