import React from "react";
import "./progressbar.css";

const progressBar = showStatus => {
  if (showStatus.showLoading) {
    return (
      <div className="linear-progress-material">
        <div className="bar bar1" />
        <div className="bar bar2" />
      </div>
    );
  } else {
    return null;
  }
};

export default progressBar;
