import React, { Component } from "react";
import Checkbox from "./checkbox";

var checkedBoxesCount = 0;
class Table extends Component {
  checkDisableForUserBox = () => {
    return "true";
  };

  updateCheckBoxCount = () => {
    checkedBoxesCount += 1;
  };
  componentDidMount = () => {
    console.log("check count", checkedBoxesCount);
    this.props.onUpdateScreensAccesible("inc", checkedBoxesCount);
  };

  render() {
    const tableData = this.props.data;
    return (
      <div className="tableProps">
        <table className="table table-bordered table-fixed">
          <thead>
            <tr>
              <th>Screen Names</th>
              <th> Restricted for Security level</th>
              <th> Restricted for User </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.Screen}</td>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={data.SecurityEnabled}
                    disabled={true}
                  />
                  {data.SecurityEnabled ? (
                    <label className="text-success">Accessible</label>
                  ) : (
                    <label className="text-danger">Cannot be Accessed</label>
                  )}
                </td>
                <td>
                  <Checkbox
                    checkboxData={data}
                    onUpdateCheckBox={this.updateCheckBoxCount}
                    onChangeCheckBox={this.props.onUpdateScreensAccesible}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
