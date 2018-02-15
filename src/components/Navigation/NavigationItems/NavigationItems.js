import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/info">Info</NavigationItem>
      <NavigationItem link="/diet">Diet</NavigationItem>
      <NavigationItem link="/recipes">Recipes</NavigationItem>
      {/* <NavigationItem link="/signup">Register</NavigationItem> */}
    </ul>
  );
};

export default navigationItems;
