// Product.js
import "./Products.css";
import React, { Component } from "react";

export default class Products extends Component {
  addProduct(id) {
    this.props.addPro(id);
  }
  render() {
    return (
      <div className="product">
        <img src={this.props.img} alt="Product " className="product-image" />
        <h2 className="product-title">{this.props.title}</h2>
        <p className="product-price">${this.props.price}</p>
        <button
          className="add-button"
          onClick={() => this.addProduct(this.props.id)}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}
