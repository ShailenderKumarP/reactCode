import React from "react";

import Button from "../../Components/UI/Button/Button";
import hidePassword from "../../Images/hidePassword.png";
import showPassword from "../../Images/showPassword.png";

import "./login.css";

const SignIn = props => {
  return (
    <>
      <h4>Login</h4>
      <div className="inputGrp">
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          spellCheck="false"
          value={props.inputValues.email.value}
          className={
            !props.inputValues.email.isValid && props.inputValues.email.touched
              ? "invalid"
              : ""
          }
          onChange={event => props.change(event, "email")}
          required
        ></input>
        <label htmlFor="email">Email</label>
      </div>
      <div className="inputGrp">
        <input
          type={props.showPassword ? "text" : "password"}
          name="password"
          id="Password"
          spellCheck="false"
          className={
            !props.inputValues.password.isValid &&
            props.inputValues.password.touched
              ? "invalid"
              : ""
          }
          onChange={event => props.change(event, "password")}
          value={props.inputValues.password.value}
          required
        ></input>
        <label htmlFor="Password">Password</label>
        {props.showPassword ? (
          <img
            onClick={props.toggleShowPassword}
            src={hidePassword}
            className="signInHidePasswordImg signInPasswordImg"
            alt="hide Password"
          />
        ) : (
          <img
            onClick={props.toggleShowPassword}
            src={showPassword}
            className="signInShowPasswordImg signInPasswordImg"
            alt="show Password"
          />
        )}
      </div>
      <div className="inputGrp">
        <button type="submit" name="login" id="login" onClick={props.submit}>
          Submit
        </button>
      </div>

      <div style={{ color: "white", marginTop: "10px" }}>
        New user ? You can{" "}
        <Button classes="green" clicked={props.toggleSignUp}>
          Sign Up
        </Button>{" "}
        here.
      </div>
      <div className="errors">{props.errors}</div>
    </>
  );
};

const dispatchActions = dispatch => {
  return {
    showLoading: () => dispatch({ type: "SHOW_LOADING" }),
    hideLoading: () => dispatch({ type: "HIDE_LOADING" })
  };
};

export default SignIn;
