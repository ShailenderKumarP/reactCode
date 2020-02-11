import React, { Component } from "react";
import "./App.css";
import Home from "./Routers/Home";
import Page1 from "./Routers/Page1";
import Routing from "./Routing";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = {
    name: "Shailender",
    address: "hno",
    pincode: "900989",
    phNbr: "6656",
    emailId: "kumar@gmail.com",
    persons: [],
    showListToggle: true,
    showList: "",
    list: [
      {
        name: "Shailender",
        address: "hno",
        pincode: "900989",
        phNbr: "6656",
        emailId: "kumar@gmail.com"
      }
    ]
  };

  detailsHide = {
    display: "none"
  };

  getUsers = () => {
    return fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(respJson => {
        console.log(respJson.results);
        this.setState({ persons: respJson.results });
        console.log(this.state);
        return respJson.results;
      });
  };

  handleAjax = () => {
    // console.log("Handle Ajax..");
    // let results = this.getUsers();
    // this.renderList();
    this.state.showListToggle = !this.state.showListToggle;
    this.state.showList = this.state.showListToggle ? "detailsHide" : "";
    this.forceUpdate();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    this.state.list.push({ name: "Kuma", pincode: "897897" });
    this.forceUpdate();
  };
  renderList = () => {
    // console.log(this.state.list);
    let item = this.state;
    return (
      <ul>
        <li> Name : {item.name} </li>
        <li> Address :{item.address} </li>
        <li> Pincode : {item.pincode} </li>
        <li> Phone Nbr :{item.phNbr} </li>
        <li> Email Id :{item.emailId} </li>
      </ul>
    );
  };
  handleLiClick = index => {
    alert("hi" + index);
  };
  render() {
    return (
      // <div>
      //   Name :
      //   <input
      //     type="textbox"
      //     name="name"
      //     value={this.state.name}
      //     onChange={this.handleChange}
      //   />
      //   <br />
      //   Address :
      //   <input
      //     type="textbox"
      //     name="address"
      //     value={this.state.address}
      //     onChange={this.handleChange}
      //   />
      //   <br />
      //   Pincode :
      //   <input
      //     type="textbox"
      //     name="pincode"
      //     value={this.state.pincode}
      //     onChange={this.handleChange}
      //   />
      //   <br />
      //   Ph Nbr :
      //   <input
      //     type="textbox"
      //     name="phNbr"
      //     value={this.state.phNbr}
      //     onChange={this.handleChange}
      //   />
      //   <br />
      //   Email Id :
      //   <input
      //     type="textbox"
      //     name="emailId"
      //     value={this.state.emailId}
      //     onChange={this.handleChange}
      //   />
      //   <br />
      //   <button onClick={this.handleAjax}>Submit</button>
      //   <div className={this.state.showList}>{this.renderList()}</div>
      // </div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
