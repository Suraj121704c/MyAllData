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
      <Link to={"/"}>Login</Link>
      <Link to={"/register"}>Sign Up</Link>
      <Link to={"/create"}>Create</Link>
      <Link to={"/blogs"}>BLogs</Link>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
};

export default Navbar;