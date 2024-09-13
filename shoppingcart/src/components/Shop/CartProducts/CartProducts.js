// CartProduct.js
import "./CartProducts.css"; 
import React, { Component } from 'react'

export default class CartProducts extends Component {
  render() {
    return (
        <div className="cart-container">
        <h1>Your Cart</h1>Name
        <ul className="cart-items">
            <li className="cart-item">
                <span className="item-name">Product 1</span>
                <span className="item-price">$10.00</span>
                <button className="remove-item">Remove</button>
            </li>
            <li className="cart-item">
                <span className="item-name">Product 2</span>
                <span className="item-price">$15.00</span>
                <button className="remove-item">Remove</button>
            </li>
            <li className="cart-item">
                <span className="item-name">Product 3</span>
                <span className="item-price">$20.00</span>
                <button className="remove-item">Remove</button>
            </li>
        </ul>
        <button className="remove-all">Remove All Products</button>
    </div>
    )
  }
}



