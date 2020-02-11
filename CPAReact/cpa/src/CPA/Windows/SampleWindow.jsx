import React, { Component } from "react";
const winStyle = {
  top: "30%",
  position: "absolute"
};
class Sample extends Component {
  render() {
    return (
      <div style={winStyle}>
        Name : <input />
        <br />
        Age : <input />
      </div>
    );
  }
}

export default Sample;
