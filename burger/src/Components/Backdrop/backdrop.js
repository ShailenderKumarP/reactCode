import React from "react";
import "./backdrop.css";

const backdrop = props => (
  <div
    style={{
      display: props.show ? "block" : "none"
    }}
    onClick={props.toggleShowSummary}
    className="backdrop"
  />
);

export default backdrop;
