import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const navigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>
        Home
      </NavigationItem>
      <NavigationItem link="/diet">Diet</NavigationItem>
      <NavigationItem link="/recipes">Recipes</NavigationItem>
      <NavigationItem link="/signup">Register</NavigationItem>
    </ul>
  );
};

export default navigationItems;
