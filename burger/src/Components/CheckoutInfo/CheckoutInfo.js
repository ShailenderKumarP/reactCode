import React from "react";
import "./CheckoutInfo.css";

const CheckoutInfo = props => {
  console.log(props, "props");
  // return <>checked out </>;

  return (
    <div className="checkoutInfo">
      <div>
        Delivering at{" "}
        <b>
          {props.checkoutInfo.houseNo.value},{props.checkoutInfo.area.value}{" "}
        </b>
        near to{" "}
        <b>
          {props.checkoutInfo.landmark.value}-{props.checkoutInfo.zipCode.value}
        </b>
      </div>
    </div>
  );
};

export default CheckoutInfo;
