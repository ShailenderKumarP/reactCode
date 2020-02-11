import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "customBtn " + props.classes;
  let isDisabled = props.isDisabled ? true : false;

  return (
    <button
      className={classList}
      name={props.btnName}
      style={props.style}
      onClick={props.clicked}
      disabled={isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
