import Dialog from "react-dialog";
import React, { Component } from "react";
class Example extends Component {
  state = {
    isDialogOpen: false
  };

  openDialog = () => this.setState({ isDialogOpen: true });

  handleClose = () => this.setState({ isDialogOpen: false });

  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.openDialog}>
          Open Dialog
        </button>
        {this.state.isDialogOpen && (
          <Dialog
            title="CPA Window"
            onClose={this.handleClose}
            isDraggable={this.props.parameters.draggable}
            isResizable={this.props.parameters.resizable}
            allowMinimize={true}
            allowMaximize={true}
            width={this.props.parameters.width}
            buttons={[
              {
                text: "Close",
                onClick: () => this.handleClose()
              }
            ]}
          >
            <h1>Dialog Content</h1>
            <p>More Content. Anything goes here</p>
          </Dialog>
        )}
      </div>
    );
  }
}

export default Example;
