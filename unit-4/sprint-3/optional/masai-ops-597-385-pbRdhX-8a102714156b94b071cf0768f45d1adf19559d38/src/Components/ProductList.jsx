import React from "react";
import ProductItem from "./ProductItem";
// {title,price,image,category}
// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {
  // console.log(products)
  return <div data-testid="products-container">{products.map((pro) => {
    return <ProductItem key={pro.id}
     title={pro.title}
     price={pro.price}
     image={pro.image}
     category={pro.category}
    />
  })}</div>;
};

// export
export default ProductList;
