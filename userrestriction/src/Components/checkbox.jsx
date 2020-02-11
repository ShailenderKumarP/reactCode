import React, { Component } from "react";
class checkbox extends Component {
  state = {
    disable: false,
    checked: true
  };
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.state.checked}
          disabled={this.state.disable}
          onChange={this.changeState}
        />
        {this.state.checked ? (
          <label className="text-success">Accessible</label>
        ) : (
          <label className="text-info">Cannot be Accessed</label>
        )}
      </>
    );
  }

  // disabling if it is disabled for that security level
  componentDidMount() {
    const props = this.props.checkboxData;
    var checkedStatus = false;
    if (props.SecurityEnabled) {
      if (props.UserEnabled) {
        checkedStatus = true;
        this.props.onUpdateCheckBox();
      }
      this.setState({ disable: false, checked: checkedStatus });
    } else {
      this.setState({ disable: true, checked: false });
    }
  }

  changeState = prevState => {
    this.setState({ checked: !this.state.checked }, function() {
      if (this.state.checked) {
        this.props.onChangeCheckBox("inc");
      } else {
        this.props.onChangeCheckBox("dec");
      }
    });
  };
}

export default checkbox;
