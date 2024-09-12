import React, { Component } from "react";
import Header from "./Header/Header";
import Products from "./Products/Products";
import CartProducts from "./CartProducts/CartProducts";
import Footer from "./Footer/Footer";
import "./Shop.css";

export default class Shop extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div className="pro-container">
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
        <div>
          {" "}
          <CartProducts />
        </div>
        <div>
          {" "}
          <Footer />
        </div>
      </>
    );
  }
}
