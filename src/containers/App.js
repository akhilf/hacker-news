import React, { Component } from "react";
import Layout from "../components/hoc/Layout";
import News from "./news/News";
import New from "./new/New";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/" exact component={News} />
            <Route path="/news" exact component={News} />
            <Route path="/new" exact component={New} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
