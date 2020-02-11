import React from "react";
import "./burger-blocks.css";

const burgerUi = props => {
  const ingredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])].map((_, index) => {
        return (
          <div
            className={"burger-" + ingredientName}
            key={ingredientName + index}
          ></div>
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  return (
    <div className="burgerLayout">
      <div className="burger-bread-top"></div>
      {ingredients.length > 0 ? (
        ingredients
      ) : (
        <span className="noIngredients">Only Bread wouldn't be tasty :( </span>
      )}
      <div className="burger-bread-bottom"></div>
    </div>
  );
};

export default burgerUi;
