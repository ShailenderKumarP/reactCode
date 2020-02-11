import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

class Home extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/page1"> Page1 </Link>
              </li>
              <li>
                <Link activeClassName="linkActive" to="/page2">
                  Page2
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div>
          <Route path="/" exact strict render={() => <p> Home</p>} />
          <Route path="/page1" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
        </div>
      </div>
    );
  }
}
export default Home;
