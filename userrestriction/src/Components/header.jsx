import React, { Component } from "react";
import UserDropDown from "./userDropdown";
import TableData from "./tableData";
class header extends Component {
  state = {
    userData: {
      msId: [
        "tvijaya2",
        "pkuma388",
        "sgoyal26",
        "akuma564",
        "pravitej",
        "tvijaya2",
        "pkuma388",
        "sgoyal26",
        "akuma564",
        "pravitej",
        "tvijaya2",
        "pkuma388",
        "sgoyal26",
        "akuma564",
        "pravitej"
      ]
    },
    rows: [
      {
        Screen: "Options",
        SecurityEnabled: true,
        UserEnabled: false
      },
      {
        Screen: "Admin",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Processor",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Super User",
        SecurityEnabled: false,
        UserEnabled: false
      },
      {
        Screen: "Field Service",
        SecurityEnabled: true,
        UserEnabled: true
      },
      {
        Screen: "Claims Development",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Dofr",
        SecurityEnabled: true,
        UserEnabled: false
      },
      {
        Screen: "Options",
        SecurityEnabled: true,
        UserEnabled: false
      },
      {
        Screen: "Admin",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Processor",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Super User",
        SecurityEnabled: false,
        UserEnabled: false
      },
      {
        Screen: "Field Service",
        SecurityEnabled: true,
        UserEnabled: true
      },
      {
        Screen: "Claims Development",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Dofr",
        SecurityEnabled: true,
        UserEnabled: false
      },
      {
        Screen: "Options",
        SecurityEnabled: true,
        UserEnabled: false
      },
      {
        Screen: "Admin",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Processor",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Super User",
        SecurityEnabled: false,
        UserEnabled: false
      },
      {
        Screen: "Field Service",
        SecurityEnabled: true,
        UserEnabled: true
      },
      {
        Screen: "Claims Development",
        SecurityEnabled: false,
        UserEnabled: true
      },
      {
        Screen: "Dofr",
        SecurityEnabled: true,
        UserEnabled: false
      }
    ],
    displayingData: {
      username: "",
      ScreensAccesible: 0,
      availableScreens: 0,
      totalScreens: 21
    }
  };

  componentDidMount = () => {
    this.updateDisplayingAvailableScreens();
  };

  updateDisplayingUser = name => {
    let user = Object.assign({}, this.state.displayingData);
    user["username"] = name;
    this.setState({ displayingData: user });
  };

  updateDisplayingScreensAccesible = (value, count) => {
    let user = Object.assign({}, this.state.displayingData);
    if (count) {
      user["ScreensAccesible"] =
        this.state.displayingData.ScreensAccesible + count;
    } else if (value === "inc") {
      user["ScreensAccesible"] = this.state.displayingData.ScreensAccesible + 1;
    } else if (value === "dec") {
      user["ScreensAccesible"] = this.state.displayingData.ScreensAccesible - 1;
    }
    this.setState({ displayingData: user });
  };

  updateDisplayingAvailableScreens = () => {
    let count = 0;
    let user = Object.assign({}, this.state.displayingData);
    // this.state.displayingData.forEach(data => {
    //   if (data.SecurityEnabled) count++;
    // });
    user["availableScreens"] = count;
    this.setState({ displayData: user });
  };

  updateUserDataState = data => {
    this.setState({ userData: data });
  };

  updateTableState = tableData => {
    this.setState({ rows: tableData });
  };
  render() {
    var displayData = this.state.displayingData;
    return (
      <div className="container-fluid">
        <UserDropDown
          userData={this.state.userData}
          onUpdateUserDataState={this.updateUserDataState}
          onUpdateDisplayingUser={this.updateDisplayingUser}
        />
        <TableData
          data={this.state.rows}
          onUpdateTable={this.updateTableState}
          onUpdateScreensAccesible={this.updateDisplayingScreensAccesible}
        />
        <div className="mt-3 row">
          <div className="col-md-10">
            {displayData.username === "" ? (
              "No user selected"
            ) : (
              <div>
                <div>
                  <label> Selected User </label> :{" "}
                  <label> {displayData.username} </label>
                </div>
                <div>
                  <label> Accessible screens </label>:{" "}
                  <label> {displayData.ScreensAccesible} </label>
                </div>
                <div>
                  <label> Available Screens</label>:{" "}
                  <label> {displayData.availableScreens} </label>
                </div>

                <div>
                  <label> Total Screens </label>:{" "}
                  <label> {displayData.totalScreens} </label>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary float-right">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
