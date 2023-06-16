import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    axios
      .post("http://localhost:5000/users/logout", {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert(res.data);
        localStorage.removeItem("token")
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
