import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Landing from "./components/UI/Landing/Landing";
import Info from "./containers/Info/Info";
import Diet from "./containers/Diet/Diet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/info" component={Info} />
            <Route path="/diet" component={Diet} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
