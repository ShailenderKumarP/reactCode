import React, { Component } from "react";

class Page1 extends Component {
  state = { counter: 1, disabled: false };

  componentWillUnmount() {
    console.log("unmounted");
  }

  goBack1 = () => {
    console.log(this.props);
    if (this.props) this.props.history.goBack();
  };

  increment = () => {
    this.setState({ counter: 2 });
  };

  render() {
    return (
      <div>
        <p> Page1</p>
        <button onClick={this.goBack1} disabled={this.state.disabled}>
          Back
        </button>
        <button onClick={this.increment}>Add</button>
        {this.state.counter}
      </div>
    );
  }
}
export default Page1;
