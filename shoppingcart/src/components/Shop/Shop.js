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
        {
          id: 1,
          title: "Album 1",
          price: 5,
          img: "Image/Album 1.Jpg",
          count: 1,
        },
        {
          id: 2,
          title: "Album 2",
          price: 15,
          img: "Image/Album 2.Jpg",
          count: 1,
        },
        {
          id: 3,
          title: "Album 3",
          price: 20,
          img: "Image/Album 3.Jpg",
          count: 1,
        },
        {
          id: 4,
          title: "Album 4",
          price: 100,
          img: "Image/Album 4.Jpg",
          count: 1,
        },
        {
          id: 5,
          title: "Album 5",
          price: 5,
          img: "Image/Album 5.Jpg",
          count: 1,
        },
        {
          id: 6,
          title: "Album 6",
          price: 50,
          img: "Image/Album 6.Jpg",
          count: 1,
        },
      ],

      shoppingCart: [],
    };
    this.addProductHandler = this.addProductHandler.bind(this);
    this.removeProductHandler = this.removeProductHandler.bind(this);
    this.removeAllProductHandler = this.removeAllProductHandler.bind(this);
  }

  addProductHandler(proId) {
    let selectedProduct = this.state.products.find((pro) => pro.id === proId);

    let isInCart = this.state.shoppingCart.find((pro) => pro.id === proId); //checked if product is in cart alreade or not
    if (isInCart) {
      this.setState((prevState) => ({
        shoppingCart: prevState.shoppingCart.map((pro) =>
          pro.id === proId ? { ...pro, count: pro.count + 1 } : pro
        ),
      }));
    } else {
      this.setState((prevState) => ({
        shoppingCart: [...prevState.shoppingCart, selectedProduct],
      }));
    }
  }

  removeProductHandler(proId) {
    console.log("", proId);
    let remainingProducts = this.state.shoppingCart.filter(
      (p) => p.id !== proId
    );

    this.setState({
      shoppingCart: remainingProducts,
    });
  }
  removeAllProductHandler() {
    this.setState({
      shoppingCart: [],
    });
  }
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <div className="pro-container">
          {this.state.products.map((product) => (
            <Products
              key={product.id}
              {...product}
              addPro={this.addProductHandler}
            />
          ))}
        </div>
        <div>
          {" "}
          <CartProducts
            addCartItem={this.state.shoppingCart}
            removeCartItem={this.removeProductHandler}
            removeAllCartItem={this.removeAllProductHandler}
          />
        </div>
        <div>
          {" "}
          <Footer />
        </div>
      </>
    );
  }
}
