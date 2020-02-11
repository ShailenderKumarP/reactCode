import React, { Component } from "react";
import TableDetails from "./tableDetails";

class ggn extends Component {
  radioChange = (e, index) => {
    let names = JSON.parse(JSON.stringify(this.state.dataList));
    names[index].value = e.target.value.toLocaleUpperCase();
    this.setState({ dataList: names });
  };
  save = () => {
    let list = this.state;
    let today = new Date();
    list.date =
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear();
    localStorage.setItem("ggnDetails" + list.date, JSON.stringify(list));
  };
  state = {
    dataList: [
      { name: "Sandeep", value: "" },
      { name: "Sanchit", value: "" },
      { name: "Damanjeet", value: "" },
      { name: "Karan", value: "" },
      { name: "Ashwini", value: "" },
      { name: "Aniket", value: "" },
      { name: "Rahul", value: "" },
      { name: "Niranjan", value: "" },
      { name: "Reema", value: "" },
      { name: "Shyam", value: "" },
      { name: "Akshay", value: "" },
      { name: "Navanshu", value: "" },
      { name: "Rukmini", value: "" }
    ]
  };
  render() {
    return (
      <TableDetails
        data={this.state}
        onUpdateDetails={this.radioChange}
        onSave={this.save}
      />
    );
  }
}

export default ggn;
