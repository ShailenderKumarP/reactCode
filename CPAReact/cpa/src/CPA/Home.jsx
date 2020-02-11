import React, { Component } from "react";
import CPANavbar from "./Navbar/Navbar";
import SampleWindow from "./Windows/SampleWindow";
import DialogRe from "./Windows/reactDialog";
import "../App.css";
class Home extends Component {
  state = {
    window: false
  };
  updateState = () => {
    let winState = this.state.window;
    if (!winState) {
      this.setState({ window: true });
    } else {
      this.setState({ window: false });
    }
  };
  render() {
    return (
      <React.Fragment>
        <CPANavbar onUpdateState={this.updateState} />
        {this.state.window && <SampleWindow />}
        <DialogRe
          parameters={{ resizable: false, width: 500, draggable: true }}
        />
        <DialogRe
          parameters={{ resizable: true, width: 700, draggable: false }}
        />
      </React.Fragment>
    );
  }
}

export default Home;
