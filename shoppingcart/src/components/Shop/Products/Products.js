// Product.js
import React from "react";
import "./Products.css";

const Products = () => {
  return (
    
      <div class="product">
        <img src="Image/Shirt.png" alt="Product " class="product-image" />
        <h2 class="product-title">Sample Product</h2>
        <p class="product-price">$19.99</p>
        <button class="add-button">Add to Cart</button>
      </div>
   
  );
};

export default Products;
