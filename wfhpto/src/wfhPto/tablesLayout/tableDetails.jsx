import React, { Component } from "react";
import Display from "./dataDisplay";

class tableDetails extends Component {
  radioChange = (e, index) => {
    this.props.onUpdateDetails(e, index);
  };

  showDetails = () => {
    return (
      <>
        {this.props.data.dataList.map(data => (
          <Display details={data} />
        ))}
      </>
    );
  };
  render() {
    let regionalDetails = this.props.data;
    return (
      <>
        <div className="col-md-3">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>WFH</th>
                <th>PTO</th>
              </tr>
            </thead>

            <tbody>
              {regionalDetails.dataList.map((data, index) => (
                <tr>
                  <td>{data.name}</td>
                  <td>
                    <input
                      type="radio"
                      name={data.name}
                      onClick={(event, i) => this.radioChange(event, index)}
                      value="wfh"
                      id="wfh"
                    />
                    <label htmlFor="wfh" className="wfhImg" />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={data.name}
                      onClick={(event, i) => this.radioChange(event, index)}
                      value="pto"
                      id="pto"
                    />
                    <label htmlFor="pto" className="ptoImg" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <b>Data</b> :
            <button
              className="btn btn-primary float-right"
              onClick={this.props.onSave}
            >
              Save
            </button>
          </div>
          {this.showDetails()}
        </div>
      </>
    );
  }
}

export default tableDetails;
