import React from "react";
import { Link } from "react-router-dom";

import classes from "./Landing.css";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <h1 className={classes.Title}>PRIME Diet</h1>
      <p>
        "A journey of a thousand miles begins with a single step."
        <sub className={classes.Citation}>Lao-Tsu</sub>
      </p>
      <Link to="/info" className={classes.Button}>
        START
      </Link>
    </div>
  );
};

export default Landing;
