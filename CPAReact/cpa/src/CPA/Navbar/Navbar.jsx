import React, { Component } from "react";
class CPANavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default main-nav">
        <ul className="nav nav-menu-custom navbar-nav navbar-right">
          <li className="dropdown dropdown-top">
            <a
              className="dropdown-toggle linkClass"
              id="optionLink"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={this.props.onUpdateState}
            >
              <u>O</u>ptions <span className="caret" />
            </a>
            <a
              className="dropdown-toggle linkClass"
              id="optionLink"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"

              //
            >
              Set <u>C</u>laim Retrieval <span className="caret" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default CPANavbar;
