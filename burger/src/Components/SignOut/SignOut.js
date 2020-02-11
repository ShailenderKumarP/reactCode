import React from "react";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";

const Signout = props => {
  return (
    <Modal
      toggleModal={props.toggleSignOut}
      showModal={props.show}
      title="Signout"
    >
      <p style={{ color: "black" }}>Are you sure you want to sign out?</p>
      <p>
        <Button
          style={{ width: "100px" }}
          classes="red"
          clicked={props.signOut}
        >
          Yes
        </Button>
        <Button
          style={{ width: "100px" }}
          classes="green"
          clicked={props.toggleSignOut}
        >
          No
        </Button>
      </p>
    </Modal>
  );
};

export default Signout;
