import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products } = useSelector((store) => store.productReducer);

  // console.log(location);

  let obj = {
    params: {
      // getAll for more than one values
      gender: searchParams.getAll("category"),
      // to avoid predefault sort by order
      _sort: searchParams.get("order") && "price",
      // get is for only one value
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <div
      style={{
        margin: "40px auto",
        marginLeft: "30px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "20px",
      }}
    >
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </div>
  );
};
