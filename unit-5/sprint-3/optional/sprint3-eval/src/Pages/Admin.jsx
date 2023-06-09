import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../Redux/MovieReducer/action";

const initialState = {
  Title: "",
  Year: "",
  imdbID: "",
  Type: "",
  rating: "",
  Poster: "",
};

export const Admin = () => {
  const [products, setProducts] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProducts((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProducts(products))
    // console.log(products)
    setProducts(initialState)
  }
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={products.Title}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Title"
          name="Title"
        />
        <input
          type="text"
          value={products.Year}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Year"
          name="Year"
        />
        <input
          type="text"
          value={products.imdbID}
          placeholder="imdbID"
          onChange={(e) => {
            handleChange(e);
          }}
          name="imdbID"
        />
        <input
          type="text"
          value={products.Type}
          placeholder="Type"
          onChange={(e) => {
            handleChange(e);
          }}
          name="Type"
        />
        <input
          type="text"
          value={products.rating}
          placeholder="rating"
          onChange={(e) => {
            handleChange(e);
          }}
          name="rating"
        />
        <input
          type="text"
          value={products.Poster}
          placeholder="Poster"
          onChange={(e) => {
            handleChange(e);
          }}
          name="Poster"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
