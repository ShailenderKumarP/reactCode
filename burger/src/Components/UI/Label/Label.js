import React from "react";

const Label = props => {
  return (
    <label
      style={{ float: "left", width: props.width, height: "21.6px" }}
      {...props}
    >
      {props.children}
    </label>
  );
};

export default Label;
