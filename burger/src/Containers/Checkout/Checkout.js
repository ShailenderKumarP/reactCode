import React, { Component } from "react";
import { connect } from "react-redux";
import "./Checkout.css";
import BurgerIngredients from "../../Components/Burger/Burger-building";
import Button from "../../Components/UI/Button/Button";
import CheckoutForm from "../Form/checkoutForm";
import CheckoutInfo from "../../Components/CheckoutInfo/CheckoutInfo";
import Payment from "../Payment/Payment";
import LocationImg from "../../Images/location1.png";

class Checkout extends Component {
  state = { showPayment: false };

  routeToHome = () => {
    this.props.history.push("/");
  };

  getCheckoutInfo = checkoutInfo => {
    console.log(checkoutInfo, "checkoutInfo");
    this.setState({ checkoutInfo, showPayment: true });
  };

  checkoutSummary = () =>
    this.props.price !== 20 ? (
      <div>
        <div className="checkoutBurgerIngredients">
          Your Burger :
          <BurgerIngredients ingredients={this.props.ingredients} />
        </div>
        {this.state.showPayment ? (
          <>
            <CheckoutInfo checkoutInfo={this.state.checkoutInfo} />
            <div className="checkoutLocation success">
              <img src={LocationImg} alt="location" />
            </div>
            <div className="timeline" />
            <Payment price={this.props.price} />
          </>
        ) : (
          <>
            <CheckoutForm onSubmit={this.getCheckoutInfo} />{" "}
            <img
              src={LocationImg}
              alt="location"
              className="checkoutLocation"
            />
          </>
        )}
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>
        <p>No Ingredients found</p>
        <Button clicked={this.routeToHome} classes="green">
          Add Ingredients
        </Button>
      </div>
    );

  render() {
    console.log(this.props);
    return <div className="checkoutSummary">{this.checkoutSummary()}</div>;
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredients, price: state.price };
};

export default connect(mapStateToProps)(Checkout);
