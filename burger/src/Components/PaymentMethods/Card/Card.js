import React from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import "./cardPayment.css";
import MasterCard from "../../../Images/mastercard.png";
import Visa from "../../../Images/visa.png";

const formatCardNbr = e => {
  let inputEl = e.target;
  let length = inputEl.value.length;
  console.log(e);

  if (
    e.nativeEvent.data !== null &&
    (length === 4 || length === 9 || length === 14)
  ) {
    inputEl.value = inputEl.value + " ";
  }
};

const cardNbrKeydown = e => {
  let inputEl = e.target;
  let selectionEnd = inputEl.selectionEnd;
  if (
    (selectionEnd === 6 || selectionEnd === 11 || selectionEnd === 16) &&
    (e.key === "Delete" || e.key === "Backspace")
  ) {
    inputEl.value = inputEl.value.slice(0, selectionEnd - 2);
    e.preventDefault();
  }
};

const CardPayment = props => {
  return (
    <div className="cardPayment">
      <div>
        <div id="cardModel">
          <div className="cardBackground">
            <div>
              <Input
                type="text"
                name="cardNumber"
                placeholder="Name on Card"
              ></Input>
            </div>
            <div>
              <Input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                maxLength="19"
                onBeforeinput={formatCardNbr}
                onkeydown={cardNbrKeydown}
              ></Input>
            </div>
            <div>
              <Input
                type="text"
                name="expiryMM"
                placeholder="mm"
                maxLength="2"
                size="2"
              ></Input>
              /
              <Input
                type="text"
                name="expiryYY"
                placeholder="yy"
                maxLength="2"
                size="2"
              ></Input>
            </div>
            <div>
              <Input
                type="password"
                name="cvv"
                placeholder="cvv"
                maxLength="3"
                size="2"
              ></Input>
              <img className="acceptedCards" src={Visa} alt="visa" />{" "}
              <img
                className="acceptedCards"
                src={MasterCard}
                alt="MasterCard"
              />
            </div>
          </div>
        </div>
      </div>
      <Button classes="green payBtn">Pay ₹{props.price}</Button>
    </div>
  );
};

export default CardPayment;
