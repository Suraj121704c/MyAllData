import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Register</Link>
      <Link to={"/posts"}>Posts</Link>
      <Link to={"/create"}>Create</Link>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
};

export default Navbar;
