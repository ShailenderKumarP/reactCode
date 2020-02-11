import React, { Component } from "react";
import logo from "../images/logo.jpg";

const height = {
  height: "40px"
};

class userDropdown extends Component {
  state = {
    theme: "light"
  };

  ajaxCall = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(respJson => {
        console.log(respJson);
        // this.setState({ userData: respJson });
        const props = this.props;
        props.onUpdateUserDataState(respJson);
        return;
      });
  };

  lightTheme = () => {
    return (
      <div className="userDropDown navLightTheme">
        <div className="row mt-3 mb-3">
          <div className="col-md-1">
            <img src={logo} className="lightThemeImg" {...height} alt="logo" />
          </div>
          <div className="col-md-8 text-center">
            <h3>User's screen</h3>
          </div>
          <div className="LightTheme" onClick={this.changeTheme}>
            <button className="lightThemeBtn" />
            <label className="lightLabel">Light</label>
          </div>
          <div className="row float-right col-md-2">
            Usernames : {this.renderList()}
          </div>
        </div>
      </div>
    );
  };

  darkTheme = () => {
    return (
      <div className="userDropDown navDarkTheme">
        <div className="row mt-3 mb-3">
          <div className="col-md-1">
            <img src={logo} className="darkThemeImg" {...height} alt="logo" />
          </div>
          <div className="col-md-8 text-center">
            <h3>User's screen</h3>
          </div>
          <div className="darkTheme" onClick={this.changeTheme}>
            <button className="darkThemeBtn" />
            <label className="darkLabel">Dark</label>
          </div>
          <div className="row float-right col-md-2">
            Usernames : {this.renderList()}
          </div>
        </div>
      </div>
    );
  };

  changeTheme = () => {
    let nxtTheme = this.state.theme === "light" ? "dark" : "light";
    this.setState({ theme: nxtTheme });
  };

  themeToRender = () => {
    if (this.state.theme === "light") {
      this.applytheme();
      return this.lightTheme();
    } else if (this.state.theme === "dark") {
      this.applytheme();
      return this.darkTheme();
    }
  };

  applytheme = () => {
    if (
      document.body.classList.contains("dark") &&
      this.state.theme === "dark"
    ) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else if (
      document.body.classList.contains("light") &&
      this.state.theme === "light"
    ) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  getData = event => {
    var selectedUser = event.target.value;
    this.props.onUpdateDisplayingUser(selectedUser);
    console.log(this.props);
  };

  renderList = () => {
    const userData = this.props.userData;
    // this.ajaxCall();
    return (
      <div>
        <select
          className="wid100px"
          onChange={event => {
            this.getData(event);
          }}
        >
          <option />
          {userData.msId.map((id, index) => (
            <option key={index} value={id}>
              {id}
            </option>
          ))}
          ;
        </select>
      </div>
    );
  };

  render() {
    // { shld make ajax call on load to get list of userid's
    //   this.ajaxCall();
    // }
    return <div>{this.themeToRender()}</div>;
  }
}

export default userDropdown;
