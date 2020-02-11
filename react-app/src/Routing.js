import React, { Component } from "react";
import Home from "./Routers/Home";
import Page1 from "./Routers/Page1";
import Page2 from "./Routers/Page2";
import { Link, Route } from "react-router-dom";

class Routing extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact strict component={Home} />
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
      </div>
    );
  }
}

export default Routing;
