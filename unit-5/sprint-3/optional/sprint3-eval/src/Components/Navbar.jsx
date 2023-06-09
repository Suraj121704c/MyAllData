import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQ = searchParams.toString("q");
  const [q, setQ] = useState(initialQ);

  useEffect(() => {
    // let params = {
    //   q
    // }
    let params = {};
    q && (params.q = q);
    setSearchParams(params);
  }, [q]);

  // console.log(searchParams)
  return (
    <DIV>
      <h2>Movie Library</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/admin"}>Admin</Link>
      <input
        style={{
          width: "400px",
          height: "35px",
          textAlign: "center",
          border: "2px solid gray",
          marginTop: "16px",
          borderRadius: "20px",
        }}
        type="text"
        placeholder="what are you looking for"
        onChange={(e) => setQ(e.target.value)}
      />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;
