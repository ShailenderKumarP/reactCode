import React from "react";
import Backdrop from "../Backdrop/backdrop";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = props => {
  console.log(props);
  return (
    <>
      <Backdrop toggleShowSummary={props.toggleModal} show={props.showModal} />
      <div
        className="modal"
        style={{
          transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showModal ? "1" : "0"
        }}
      >
        <div>
          <p className="modalTitle">{props.title}</p>
          <p className="closeIcon" onClick={props.toggleModal}>
            X
          </p>
        </div>
        <div style={{ clear: "both" }} />
        {props.children}
      </div>
    </>
  );
};

export default Modal;
