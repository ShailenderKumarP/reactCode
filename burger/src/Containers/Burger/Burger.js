import React, { Component } from "react";
import BurgerControls from "../../Components/BurgerControls/burger-controls";
import BurgerIngredients from "../../Components/Burger/Burger-building";
import Modal from "../../Components/Modal/Modal";
import OrderSummary from "../../Components/OrderSummary/orderSummary";
import { connect } from "react-redux";
import axios from "axios";
import "./Burger.css";

const ingredientCost = {
  salad: 20,
  cheese: 10,
  meat: 40,
  becon: 10
};
const operation = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
class Burger extends Component {
  state = {
    showSummary: false
  };

  addIngredientHandler = ingredientName => {
    const prevIngredients = { ...this.props.ings };
    prevIngredients[ingredientName] = prevIngredients[ingredientName] + 1;
    this.updatePrice(prevIngredients, ingredientName, "add");
  };

  removeIngredientHandler = ingredientName => {
    const prevIngredients = { ...this.props.ings };
    if (prevIngredients[ingredientName] === 0) {
      return;
    }
    prevIngredients[ingredientName] = prevIngredients[ingredientName] - 1;
    this.updatePrice(prevIngredients, ingredientName, "subtract");
  };

  updatePrice = (ingredients, ingredientName, operator) => {
    let initialPrice = this.props.totalPrice;
    let ingredientPrice = ingredientCost[ingredientName];
    let updatedPrice = operation[operator](initialPrice, ingredientPrice);
    this.props.updatePricewithIngredients(ingredients, updatedPrice);
  };

  resetPreferences = () => {
    this.props.resetPreferences();
  };

  toggleShowSummary = () => {
    const showSummary = this.state.showSummary;
    this.setState({ showSummary: !showSummary });
  };

  checkout = () => {
    this.props.history.push("/checkout");
    const showSummary = this.state.showSummary;
    this.setState({ showSummary: !showSummary });
  };

  getData = () => {
    axios.get("/test.json").then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <div>
        <Modal
          showModal={this.state.showSummary}
          toggleModal={this.toggleShowSummary}
          title="Order Summary"
        >
          <OrderSummary
            ingredients={this.props.ings}
            ingredientCost={ingredientCost}
            toggleShowSummary={this.toggleShowSummary}
            checkout={this.checkout}
          />
        </Modal>
        <div className="mainBurgerControls">
          <BurgerControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            ingredients={this.props.ings}
            totalPrice={this.props.totalPrice}
            resetPreferences={this.resetPreferences}
            toggleShowSummary={this.toggleShowSummary}
          />
        </div>
        <div className="mainBurgerIngredients">
          <BurgerIngredients ingredients={this.props.ings} />
        </div>
        {/* {this.getData()} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    totalPrice: state.price
  };
};

const dispatchEvents = dispatch => {
  return {
    updatePricewithIngredients: (ingredients, price) =>
      dispatch({ type: "UPDATE_INGS_PRICE", ings: ingredients, price: price }),
    resetPreferences: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  dispatchEvents
)(Burger);
