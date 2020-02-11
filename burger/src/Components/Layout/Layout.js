import React from "react";
import Burger from "../../Containers/Burger/Burger";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../../Containers/Navbar/Navbar";
import Checkout from "../../Containers/Checkout/Checkout";
import Login from "../../Containers/Login/login";
import axios from "axios";

axios.defaults.baseURL = "https://burger-app-d32e0.firebaseio.com/";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Navbar />
        <Route path="/" exact component={Burger} />
        <Route path="/checkout" component={Checkout} />
      </BrowserRouter>
    </>
  );
}

export default Layout;
