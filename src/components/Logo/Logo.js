import React from "react";

import scale from "../../Scale.svg";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={scale} alt="Prime Scale" />
  </div>
);

export default logo;
