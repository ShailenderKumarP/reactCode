import React, { Component } from "react";
class displaySection extends Component {
  render() {
    let props = this.props.details;
    if (props.value !== "") {
      return (
        <div className="col-md-3">
          <label className="col-md-7">{props.name} </label>
          <label className="col-md-5 float-right">:{props.value}</label>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default displaySection;
