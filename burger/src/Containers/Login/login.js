import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./login.css";

const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Login extends Component {
  state = {
    inputs: {
      signUp: {
        email: {
          value: "",
          isValid: false,
          touched: false
        },
        password: {
          value: "",
          isValid: false,
          touched: false
        },
        confirmPassword: {
          value: "",
          isValid: false,
          touched: false
        },
        name: {
          value: "",
          isValid: false,
          touched: false
        },
        contactNumber: {
          value: "",
          isValid: false,
          touched: false
        }
      },
      signIn: {
        email: {
          value: "",
          isValid: false,
          touched: false
        },
        password: {
          value: "",
          isValid: false,
          touched: false
        }
      }
    },
    isSignUp: false,
    success: false,
    error: false,
    errorMessage: "",
    isSignInValid: false,
    isSignUpValid: false,
    showPassword: false
  };

  toggleSignUp = () => {
    this.setState({ isSignUp: true });
  };

  signinInputOnChange = (e, inputName) => {
    const inputsState = this.state.inputs;
    const signInstate = inputsState.signIn;
    let isFormValid = true;
    let inputValue = e.target.value;
    signInstate[inputName].value = inputValue;
    signInstate[inputName].isValid = true;
    if (!signInstate[inputName].touched) {
      signInstate[inputName].touched = true;
    }

    if (inputName === "email") {
      if (!emailPattern.test(inputValue)) {
        signInstate[inputName].isValid = false;
      }
    } else {
      if (inputValue.length < 8) {
        signInstate[inputName].isValid = false;
      }
    }

    for (let key in signInstate) {
      if (!signInstate[key].isValid) {
        isFormValid = false;
        break;
      }
    }
    inputsState.signIn = signInstate;
    this.setState({ inputs: inputsState, isSignInValid: isFormValid });
  };

  signUpInputOnChange = (e, inputName) => {
    const inputsState = this.state.inputs;
    const signUpstate = inputsState.signUp;
    let isFormValid = true;
    let inputValue = e.target.value;
    signUpstate[inputName].value = inputValue;
    signUpstate[inputName].isValid = true;
    if (!signUpstate[inputName].touched) {
      signUpstate[inputName].touched = true;
    }

    switch (inputName) {
      case "email":
        if (!emailPattern.test(inputValue)) {
          signUpstate[inputName].isValid = false;
        }
        break;
      case "password":
        if (inputValue.length < 8) {
          signUpstate[inputName].isValid = false;
        }
        break;
      case "confirmPassword":
        if (inputValue !== signUpstate["password"].value) {
          signUpstate[inputName].isValid = false;
        }
        break;
      case "name":
        if (inputValue.length < 1) {
          signUpstate[inputName].isValid = false;
        }
        break;
      case "contactNumber":
        if (inputValue.length < 10) {
          signUpstate[inputName].isValid = false;
        }
        break;
      default:
        break;
    }

    for (let key in signUpstate) {
      if (!signUpstate[key].isValid) {
        isFormValid = false;
        break;
      }
    }
    inputsState.signUp = signUpstate;
    this.setState({ inputs: inputsState, isSignUpValid: isFormValid });
  };

  signUp = () => {
    if (!this.state.isSignUpValid) {
      this.addingError("signUp");
      return;
    }
    this.showLoading();
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBC_t05xPghiRvKFqlqhd-fw1WyBk5tAfI";
    let payload = {
      email: this.state.inputs.signUp.email.value,
      password: this.state.inputs.signUp.password.value,
      returnSecureToken: true,
      displayName: this.state.inputs.signUp.name.value
    };
    axios
      .post(url, payload)
      .then(data => {
        console.log(data);
        this.setState({ success: true, error: false });
        this.props.loginUser(payload.displayName);
      })
      .catch(err => {
        this.setState({
          error: true,
          errorMessage: err.response.data.error.message
        });
      })
      .finally(() => {
        this.props.hideLoading();
      });
  };

  addingError = type => {
    const state = this.state.inputs;
    const updatedTypeState = state[type];
    for (let key in updatedTypeState) {
      if (!updatedTypeState[key].touched) {
        updatedTypeState[key].touched = true;
      }
    }
    state[type] = updatedTypeState;
    this.setState({
      inputs: state,
      error: true,
      errorMessage: "Please fill the details"
    });
  };

  signIn = () => {
    if (!this.state.isSignInValid) {
      this.addingError("signIn");
      return;
    }
    this.props.showLoading();
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBC_t05xPghiRvKFqlqhd-fw1WyBk5tAfI";
    let payload = {
      email: this.state.inputs.signIn.email.value,
      password: this.state.inputs.signIn.password.value,
      returnSecureToken: true
    };
    axios
      .post(url, payload)
      .then(data => {
        console.log(data);
        this.setState({ success: true, error: false });
        this.props.loginUser(data.data.displayName);
      })
      .catch(err => {
        this.setState({
          error: true,
          errorMessage: err.response.data.error.message
        });
      })
      .finally(() => {
        this.props.hideLoading();
      });
  };

  toggleShowPassword = () => {
    const updatedShowPass = !this.state.showPassword;
    this.setState({ showPassword: updatedShowPass });
    console.log("pass", updatedShowPass);
  };

  render() {
    return this.state.success ? (
      <Redirect to="/" />
    ) : (
      <div id="body-background">
        <div className="loginForm">
          {this.state.isSignUp ? (
            <SignUp
              inputValues={this.state.inputs.signUp}
              change={this.signUpInputOnChange}
              submit={this.signUp}
              errors={this.state.error ? this.state.errorMessage : null}
            />
          ) : (
            <SignIn
              change={this.signinInputOnChange}
              inputValues={this.state.inputs.signIn}
              toggleSignUp={this.toggleSignUp}
              submit={this.signIn}
              errors={this.state.error ? this.state.errorMessage : null}
              showPassword={this.state.showPassword}
              toggleShowPassword={this.toggleShowPassword}
            />
          )}
          {/* <ProgressBar showLoading={this.state.showLoading} /> */}
        </div>
        <div className="BurgerImg">{/* <img src={BurerImg} /> */}</div>
        {/* <Smoke /> */}
      </div>
    );
  }
}

const dispatchActionToProps = dispatch => {
  return {
    loginUser: name => dispatch({ type: "LOGIN", username: name }),
    showLoading: () => dispatch({ type: "SHOW_LOADING" }),
    hideLoading: () => dispatch({ type: "HIDE_LOADING" })
  };
};

export default connect(
  null,
  dispatchActionToProps
)(Login);
