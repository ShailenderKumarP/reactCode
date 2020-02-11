import React, { Component } from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import "./checkoutForm.css";

class checkoutForm extends Component {
  state = {
    inputs: {
      houseNo: { value: "", minLength: 2, isValid: false, touched: false },
      area: { value: "", minLength: 10, isValid: false, touched: false },
      landmark: { value: "", minLength: 10, isValid: false, touched: false },
      zipCode: { value: "", minLength: 6, isValid: false, touched: false }
    },
    isFormValid: false
  };

  inputOnChange = event => {
    const inputEl = event.target;
    let inputElName = inputEl.name;
    let isFormValid = true;
    const stateValue = { ...this.state.inputs };
    stateValue[inputElName].value = inputEl.value;
    if (inputEl.value.length >= stateValue[inputElName].minLength) {
      stateValue[inputElName].isValid = true;
    } else {
      stateValue[inputElName].isValid = false;
    }
    if (!stateValue[inputElName].touched) {
      stateValue[inputElName].touched = true;
    }
    Object.keys(stateValue).forEach(inputName => {
      if (!stateValue[inputName].isValid && isFormValid) {
        isFormValid = false;
      }
    });
    console.log(stateValue, isFormValid);
    this.setState({ inputs: stateValue, isFormValid: isFormValid });
  };

  submitForm = () => {
    this.props.onSubmit(this.state.inputs);
  };

  render() {
    return (
      <div className="checkoutForm">
        <h5 style={{ textAlign: "center" }}>Checkout Information</h5>
        <div>
          <Input
            type="text"
            name="houseNo"
            change={this.inputOnChange}
            classes={
              this.state.inputs.houseNo.touched &&
              !this.state.inputs.houseNo.isValid
                ? "invalid"
                : null
            }
            value={this.state.inputs.houseNo.value}
            placeholder="House No."
          ></Input>
        </div>
        <div>
          <Input
            type="text"
            name="area"
            change={this.inputOnChange}
            classes={
              this.state.inputs.area.touched && !this.state.inputs.area.isValid
                ? "invalid"
                : null
            }
            value={this.state.inputs.area.value}
            placeholder="Area"
          ></Input>
        </div>
        <div>
          <Input
            type="text"
            name="landmark"
            change={this.inputOnChange}
            classes={
              this.state.inputs.landmark.touched &&
              !this.state.inputs.landmark.isValid
                ? "invalid"
                : null
            }
            value={this.state.inputs.landmark.value}
            placeholder="Landmark"
          ></Input>
        </div>
        <div>
          <Input
            type="text"
            name="zipCode"
            change={this.inputOnChange}
            classes={
              this.state.inputs.zipCode.touched &&
              !this.state.inputs.zipCode.isValid
                ? "invalid"
                : null
            }
            value={this.state.inputs.zipCode.value}
            placeholder="ZipCode"
          ></Input>
        </div>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Button
            isDisabled={!this.state.isFormValid}
            classes="green"
            clicked={this.submitForm}
          >
            Go to Payment
          </Button>
        </div>
      </div>
    );
  }
}

export default checkoutForm;
