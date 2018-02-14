import React from "react";

import scale from "../../Scale.svg";
import "./Logo.css";
const logo = props => (
  <div className={classes.Logo}>
    <img src={scale} className="App-logo" alt="Prime Scale" />
  </div>
);

export default logo;
