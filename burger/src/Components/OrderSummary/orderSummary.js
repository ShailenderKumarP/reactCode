import React from "react";
import Button from "../UI/Button/Button";

const orderSummary = props => {
  const tableOrder = Object.keys(props.ingredients).map(
    (ingredientName, index) => {
      return (
        <tr key={ingredientName + index + 1}>
          <td style={{ textTransform: "capitalize" }}>{ingredientName}</td>
          <td> {props.ingredients[ingredientName]}</td>
          <td>{props.ingredientCost[ingredientName]}</td>
        </tr>
      );
    }
  );

  return (
    <div className="orderSummary">
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
            <th>Price/Piece</th>
          </tr>
        </thead>
        <tbody>{tableOrder}</tbody>
      </table>
      <div style={{ textAlign: "start" }}>
        <Button clicked={props.checkout} classes="green">
          Continue
        </Button>
        <Button
          style={{ marginLeft: "10px", marginTop: "5px" }}
          classes="red"
          clicked={props.toggleShowSummary}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default orderSummary;
