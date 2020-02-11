import React, { Component } from "react";
import Men from "../Images/men.jpg";
import Women from "../Images/Female1.png";

class imageRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let gender = this.props.gender;
    if (gender === "Male") {
      return <img src={Men} alt="Avatar" className="avatar" />;
    } else {
      return <img src={Women} alt="Avatar" className="avatar" />;
    }
  }
}

export default imageRender;
