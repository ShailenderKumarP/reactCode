import React, { Component } from "react";
import PaymentMethods from "../../Components/PaymentMethods/PaymentMethods";
import "./Payment.css";

const options = ["Card", "UPI", "Net Banking", "Wallet", "COD"];

class Payment extends Component {
  state = {
    paymentMethod: "Card"
  };

  updateSelectedLi = paymentMethod => {
    console.log(paymentMethod);
    this.setState({ paymentMethod: paymentMethod });
  };

  render() {
    return (
      <div className="payment">
        <h5>Payment Options </h5>
        <div className="paymentMethods">
          <ul>
            {options.map(paymentOption => {
              return (
                <li
                  className={
                    "paymentOption " +
                    (paymentOption === this.state.paymentMethod
                      ? " selectedPaymentMethod"
                      : "")
                  }
                  key={paymentOption}
                  onClick={() => this.updateSelectedLi(paymentOption)}
                >
                  {paymentOption}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="paymentMethodDescription">
          <PaymentMethods
            paymentOption={this.state.paymentMethod}
            price={this.props.price}
          />
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}

export default Payment;
