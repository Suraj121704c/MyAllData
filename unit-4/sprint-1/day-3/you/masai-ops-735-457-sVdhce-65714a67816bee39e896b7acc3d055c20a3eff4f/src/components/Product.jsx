// import module.css here;
import './product.module.css'
import React from "react";
const Product = ({name,price,quantity,id,handleQty}) => {
  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button
        onClick={()=>handleQty(1)}
        data-testid="quantity-increment">+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button 
        onClick={()=>handleQty(-1)}
        disabled={quantity === 0}
        data-testid="quantity-decrement">-</button>
      </div>
    </>
  );
};
export default Product;
