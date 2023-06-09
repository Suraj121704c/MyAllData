import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h3>Shopping App</h3>
      <Link to={"/"}>Home Page</Link>
      <Link to={"/login"}>Log In</Link>
      <Link to={"/admin"}>Admin</Link>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid gray;
`;
