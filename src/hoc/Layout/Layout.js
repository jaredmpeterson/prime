import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Toolbar />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
