import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../../Components/UI/Button/Button";
import SignOut from "../../Components/SignOut/SignOut";
import ProgressBar from "../../Components/UI/ProgressBar/progressBar";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    showSignOut: false
  };
  toggleSignOut = () => {
    const showSignOut = !this.state.showSignOut;
    this.setState({ showSignOut: showSignOut });
  };

  signOut = () => {
    this.props.signout();
    this.toggleSignOut();
  };
  render() {
    console.log("props", this.props);
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName="activeLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout" activeClassName="activeLink">
              Checkout
            </NavLink>
          </li>
          {this.props.isUserloggedIn ? null : (
            <li>
              <NavLink to="/login" activeClassName="activeLink">
                Login
              </NavLink>
            </li>
          )}
          <li className="alignLeft">
            {this.props.username == "Guest" ? (
              "Guest"
            ) : (
              <span>
                Hello {this.props.username},{" "}
                <Button classes="green" clicked={this.toggleSignOut}>
                  Sign out
                </Button>
              </span>
            )}
          </li>
        </ul>
        <SignOut
          show={this.state.showSignOut}
          toggleSignOut={this.toggleSignOut}
          signOut={this.signOut}
        />
        <ProgressBar showLoading={this.props.showLoadingIcon} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserloggedIn: state.isUserLoggedIn,
    username: state.username,
    showLoadingIcon: state.showLoadingIcon
  };
};

const dispatchActions = dispatch => {
  return {
    signout: () => dispatch({ type: "LOGOUT" }),
    showLoading: () => dispatch({ type: "SHOW_LOADING" }),
    hideLoading: () => dispatch({ type: "HIDE_LOADING" })
  };
};

export default connect(
  mapStateToProps,
  dispatchActions
)(Navbar);
