import React from "react";
import "./Inputbox.css";

const inputBox = props => {
  const classes = props.classes
    ? props.classes + " customInput"
    : " customInput";
  return (
    <input
      size={props.size}
      maxLength={props.maxLength}
      type={props.type}
      placeholder={props.placeholder}
      spellCheck={props.spellCheck}
      style={props.style}
      autoComplete={props.autocomplete}
      className={classes}
      name={props.name}
      onChange={props.change}
      onBeforeInput={props.onBeforeinput}
      onKeyDown={props.onkeydown}
    />
  );
};

export default inputBox;
