import React from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";

const SignUp = props => {
  return (
    <>
      <h4>Sign Up</h4>
      <Input
        name="name"
        placeholder="Name"
        type="text"
        autocomplete="off"
        style={{ borderBottom: "1px solid white" }}
        change={e => props.change(e, "name")}
        classes={
          !props.inputValues.name.isValid && props.inputValues.name.touched
            ? "invalid"
            : ""
        }
      />
      <Input
        name="contactNumber"
        placeholder="Contact Number"
        type="text"
        autocomplete="off"
        style={{ borderBottom: "1px solid white" }}
        change={e => props.change(e, "contactNumber")}
        classes={
          !props.inputValues.contactNumber.isValid &&
          props.inputValues.contactNumber.touched
            ? "invalid"
            : ""
        }
      />
      <Input
        name="email"
        placeholder="Email Id"
        type="text"
        spellcheck="false"
        autocomplete="off"
        style={{ borderBottom: "1px solid white" }}
        change={e => props.change(e, "email")}
        classes={
          !props.inputValues.email.isValid && props.inputValues.email.touched
            ? "invalid"
            : ""
        }
      />
      <Input
        name="password"
        placeholder="Password"
        type="Password"
        autocomplete="off"
        style={{ borderBottom: "1px solid white" }}
        change={e => props.change(e, "password")}
        classes={
          !props.inputValues.password.isValid &&
          props.inputValues.password.touched
            ? "invalid"
            : ""
        }
      />
      <Input
        name="password"
        placeholder="Confirm Password"
        type="Password"
        autocomplete="off"
        style={{ borderBottom: "1px solid white" }}
        change={e => props.change(e, "confirmPassword")}
        classes={
          !props.inputValues.confirmPassword.isValid &&
          props.inputValues.confirmPassword.touched
            ? "invalid"
            : ""
        }
      />
      <Button
        classes="green"
        style={{ marginLeft: "120px" }}
        clicked={props.submit}
      >
        Submit
      </Button>
      <div className="errors">{props.errors}</div>
      <div style={{ color: "white", fontSize: "11px" }}>
        * Password must be of 8 characters. For better security reasons, add
        special character, numbers, uppercase characters.
      </div>
    </>
  );
};

export default SignUp;
