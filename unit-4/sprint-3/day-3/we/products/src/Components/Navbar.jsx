import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const links = [
  { path: "/", title: "Home" },
  { path: "/login", title: "Login" },
  { path: "/products", title: "Products" },
  {path : "/cart" , title : "Cart"}
];

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div
      style={{
        backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      {links.map((link) => (
        <Link
          style={{
            textDecoration: "none",
            color: "red",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          key={link.path}
          to={link.path}
        >
          {link.title}
        </Link>
      ))}
      <p>IS USER AUTHENTICATED : {isAuth ? "YES" : "NO"}</p>
    </div>
  );
};

export default Navbar;
