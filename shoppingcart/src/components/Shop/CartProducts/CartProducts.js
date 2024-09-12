// CartProduct.js
import React from "react";
import "./CartProducts.css"; 

const CartProducts = () => {
  return (
    <div class="cart-container">
    <h1>Your Cart</h1>
    <ul class="cart-items">
        <li class="cart-item">
            <span class="item-name">Product 1</span>
            <span class="item-price">$10.00</span>
            <button class="remove-item">Remove</button>
        </li>
        <li class="cart-item">
            <span class="item-name">Product 2</span>
            <span class="item-price">$15.00</span>
            <button class="remove-item">Remove</button>
        </li>
        <li class="cart-item">
            <span class="item-name">Product 3</span>
            <span class="item-price">$20.00</span>
            <button class="remove-item">Remove</button>
        </li>
    </ul>
    <button class="remove-all">Remove All Products</button>
</div>
  );
};

export default CartProducts;
