import React, { Component } from "react";
import classes from "./Background.css";
import BGimg from "../../../assets/images/Background.jpg";

class Background extends Component {
  state = {
    x: 0,
    y: 0
  };
  componentWillMount() {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

    this.setState({ x: x, y: y });
  }
  render() {
    return (
      <div>
        <img className={classes.bg} src={BGimg} alt="background" />
      </div>
    );
  }
}

export default Background;
