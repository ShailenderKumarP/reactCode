import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hyd from "./cardsLayout/hydNew";
import Noida from "./tablesLayout/NoidaDetails";
import Ggn from "./tablesLayout/GgnDetails";
import Home from "./home";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/hyd" exact component={Hyd} />
          <Route path="/noida" exact component={Noida} />
          <Route path="/ggn" exact component={Ggn} />
          <Route render={() => <div>No Data Available</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
