import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../Redux/ProductReducer/action";

const inintialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};

export const Admin = () => {
  const [products, setProducts] = useState(inintialState);
  const dispatch = useDispatch();

  const hanleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProducts((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(products));
    setProducts(inintialState);
  };

  return (
    <DIV>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={products.image}
          onChange={(e) => {
            hanleChange(e);
          }}
          placeholder="image"
          name="image"
        />
        <input
          type="text"
          value={products.title}
          placeholder="Name"
          onChange={(e) => {
            hanleChange(e);
          }}
          name="title"
        />
        <input
          type="text"
          value={products.price}
          placeholder="Price"
          onChange={(e) => {
            hanleChange(e);
          }}
          name="price"
        />
        <input
          type="text"
          value={products.brand}
          placeholder="Brand"
          onChange={(e) => {
            hanleChange(e);
          }}
          name="brand"
        />
        <input
          type="text"
          value={products.discount}
          placeholder="Discount"
          onChange={(e) => {
            hanleChange(e);
          }}
          name="discount"
        />
        <select
          name="gender"
          id=""
          value={products.gender}
          onChange={(e) => {
            hanleChange(e);
          }}
        >
          <option value="">select-gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  input {
    width: 80%;
    height: 40px;
    font-size: Large;
  }
  button {
    width: 20%;
    height: 35px;
  }
  select {
    width: 50%;
    height: 30px;
    font-size: Large;
  }
`;
