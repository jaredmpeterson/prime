import React from "react";

import scale from "../../Scale.svg";
import "./Logo.css";

const logo = props => (
  <div className="Logo">
    <img src={scale} alt="Prime Scale" />
  </div>
);

export default logo;
