import React, { Component } from "react";
import Header from "./Header/Header";
import Products from "./Products/Products";
import CartProducts from "./CartProducts/CartProducts";
import Footer from "./Footer/Footer";
import "./Shop.css";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, title: "Album 1", price: 5, img: "Image/Album 1.Jpg" },
        { id: 2, title: "Album 2", price: 15, img: "Image/Album 2.Jpg" },
        { id: 3, title: "Album 3", price: 20, img: "Image/Album 3.Jpg" },
        { id: 4, title: "Album 4", price: 100, img: "Image/Album 4.Jpg" },
        { id: 5, title: "Album 5", price: 5, img: "Image/Album 5.Jpg" },
        { id: 6, title: "Album 6", price: 50, img: "Image/Album 6.Jpg" },
      ],

      shoppingCart:[]
    };
  }


  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div className="pro-container">
          {this.state.products.map((product) => (
            <Products key={product.id} {...product}  />
          ))}
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
