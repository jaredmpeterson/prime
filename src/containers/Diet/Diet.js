import React, { Component } from "react";

import classes from "./Diet.css";

class Diet extends Component {
  state = {
    weight: 195,
    bodyfat: 15,
    leanBodyMass: null,
    fatMass: null,
    calories: null,
    scale: [
      18,
      18,
      18,
      18,
      18,
      18,
      17,
      17,
      17,
      17,
      17,
      17,
      16,
      16,
      16,
      16,
      15,
      15,
      15,
      14,
      14,
      14,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13
    ]
  };

  handleWeightChange = event => {
    this.setState({ weight: event.target.value });
  };

  handleBodyFatChange = event => {
    this.setState({ bodyfat: event.target.value });
  };

  handleSubmit = event => {
    let weight = this.state.weight;
    let bfp = this.state.bodyfat;
    let mci = this.state.scale[bfp];
    let lbm = function(weight, bfp) {
      return Math.round((100 - bfp) / 100 * weight);
    };
    let fm = function(weight, bfp) {
      return Math.round(weight - weight * ((100 - bfp) / 100));
    };
    let cal = function(mci) {
      return lbm(weight, bfp) * mci;
    };

    this.setState({ leanBodyMass: lbm(weight, bfp) });
    this.setState({ fatMass: fm(weight, bfp) });
    this.setState({ calories: cal(mci) });
  };

  render() {
    return (
      <div className={classes.Diet}>
        <div className="">
          <h2>Calculate Your Intake</h2>
          <div className={classes.Form}>
            <label htmlFor="weight">Weight: </label>
            <input
              type="text"
              className={classes.Input}
              value={this.state.weight}
              id="weight"
              placeholder="weight"
              onChange={this.handleWeightChange}
            />
            <label htmlFor="bodyfat">Body Fat %: </label>
            <input
              type="text"
              className={classes.Input}
              value={this.state.bodyfat}
              id="bodyfat"
              placeholder="bodyfat"
              onChange={this.handleBodyFatChange}
            />
            <button className={classes.Button} onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <p>Lean Body Mass: {this.state.leanBodyMass}</p>
        <p>Fat Mass: {this.state.fatMass}</p>
        <p>Calories: {this.state.calories}</p>
      </div>
    );
  }
}

export default Diet;
