import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = ({
  image,
  title,
  price,
  brand,
  discount,
  gender,
  id
}) => {
  return (
    <DIV>
      <img src={image} alt={title} />
      <h1>Title : {title}</h1>
      <h3>Price : {price}</h3>
      <p>Brand : {brand}</p>
      <p>Discount : {discount}</p>
      <p>Gender : {gender}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  border: 1px solid gray;
  padding: 10px;
  width: 400px;
  img {
    width: 70%;
    height: 250px;
  }
`;
