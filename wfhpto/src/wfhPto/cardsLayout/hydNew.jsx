import React, { Component } from "react";
import PageLayout from "./pageLayout";
import "../wfhpto.css";

class Hyd extends Component {
  radioChange = (e, index) => {
    let names = JSON.parse(JSON.stringify(this.state.dataList));
    names[index].value = e.target.value.toLocaleUpperCase();
    this.setState({ dataList: names });
  };
  state = {
    dataList: [
      { name: "Vijayasanthi T", gender: "Female", value: "" },
      { name: "Dinesh Kumar A", gender: "Male", value: "" },
      { name: "Pravalika M", gender: "Female", value: "" },
      { name: "Ramu K", gender: "Male", value: "" },
      { name: "Aishwarya R", gender: "Female", value: "" },
      { name: "RaviTeja P", gender: "Male", value: "" },
      { name: "Navya M", gender: "Female", value: "" },
      { name: "Bhavana V", gender: "Female", value: "" },
      { name: "Abhishek A", gender: "Male", value: "" },
      { name: "Viniethra G", gender: "Female", value: "" },
      { name: "Shailender Kumar P", gender: "Male", value: "" },
      { name: "Rajkumar R", gender: "Male", value: "" },
      { name: "Charan Kumar B", gender: "Male", value: "" }
    ]
  };
  render() {
    return <PageLayout details={this.state} UpdateStatus={this.radioChange} />;
  }
}

export default Hyd;
