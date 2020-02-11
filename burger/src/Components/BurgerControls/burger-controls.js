import React from "react";
import "./burger-controls.css";
import Button from "../UI/Button/Button";

const burgerControls = props => {
  const ingredientsControls = Object.keys(props.ingredients).map(
    ingredientName => {
      return (
        <div key={ingredientName} className="burgerControl">
          <label>{ingredientName}</label>
          <Button
            style={{ marginRight: "5px" }}
            clicked={() => {
              props.removeIngredient(ingredientName);
            }}
          >
            <span className="minus"></span>
          </Button>
          {props.ingredients[ingredientName]}
          <Button
            classes="green"
            style={{ marginLeft: "5px" }}
            clicked={() => {
              props.addIngredient(ingredientName);
            }}
          >
            +
          </Button>
        </div>
      );
    }
  );
  return (
    <div className="burgerControls">
      {ingredientsControls}
      <div style={{ marginTop: "10px" }}>Burger Price : {props.totalPrice}</div>
      <div>
        <Button
          classes="green"
          clicked={props.toggleShowSummary}
          isDisabled={props.totalPrice === 20}
        >
          Checkout
        </Button>
        <Button
          classes="resetBtn red"
          clicked={props.resetPreferences}
          isDisabled={props.totalPrice === 20}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default burgerControls;
