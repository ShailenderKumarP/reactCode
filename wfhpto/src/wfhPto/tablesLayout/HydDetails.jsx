import React, { Component } from "react";
import TableDetails from "./tableDetails";

class hyd extends Component {
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
    localStorage.setItem("hydDetails" + list.date, JSON.stringify(list));
  };

  state = {
    dataList: [
      { name: "Vijayasanthi T", value: "" },
      { name: "Dinesh Kumar A", value: "" },
      { name: "Pravalika M", value: "" },
      { name: "Ramu K", value: "" },
      { name: "Aishwarya R", value: "" },
      { name: "RaviTeja P", value: "" },
      { name: "Navya M", value: "" },
      { name: "Bhavana V", value: "" },
      { name: "Abhishek A", value: "" },
      { name: "Viniethra G", value: "" },
      { name: "Shailender Kumar P", value: "" },
      { name: "Rajkumar R", value: "" },
      { name: "Charan Kumar B", value: "" }
    ]
  };
  render() {
    return (
      <>
        <TableDetails
          data={this.state}
          onUpdateDetails={this.radioChange}
          onSave={this.save}
        />
      </>
    );
  }
}

export default hyd;
