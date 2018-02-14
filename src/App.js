import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="Prime Scale" />
          </header> */}
        </Layout>
      </div>
    );
  }
}

export default App;
