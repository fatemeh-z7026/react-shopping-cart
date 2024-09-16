// CartProduct.js
import "./CartProducts.css";
import React, { Component } from "react";

export default class CartProducts extends Component {
 
  render() {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>Name
        <ul className="cart-items">
          {this.props.addCartItem.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="item-name">{item.title}</span>
              <span className="item-price">${item.price}</span>
              <button
                className="remove-item"
                onClick={()=>this.props.removeCartItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button className="remove-all" onClick={this.props.removeAllCartItem}>Remove All Products</button>
      </div>
    );
  }
}
