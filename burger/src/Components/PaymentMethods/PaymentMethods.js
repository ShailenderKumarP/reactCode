import React from "react";
import PaymentOptions from "../../Constants/paymentOptions";
import Card from "./Card/Card";
import UPI from "./UPI/Upi";
import NetBanking from "./NetBanking/NetBanking";
import Wallet from "./Wallets/Wallets";

const selectedPayment = (paymentOption, price) => {
  switch (paymentOption) {
    case PaymentOptions.CARD:
      return <Card price={price} />;
    case PaymentOptions.UPI:
      return <UPI price={price} />;
    case PaymentOptions.NETBANKING:
      return <NetBanking price={price} />;
    case PaymentOptions.WALLET:
      return <Wallet price={price} />;
    default:
      break;
  }
};

const PaymentMethods = props => {
  return selectedPayment(props.paymentOption, props.price);
};

export default PaymentMethods;
