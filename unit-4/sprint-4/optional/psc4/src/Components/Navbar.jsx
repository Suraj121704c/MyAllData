import React from "react";
import { Link } from "react-router-dom";
import { Box } from '@chakra-ui/react'

const links = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Product" },
  { path: "/contact", title: "Contact" },
  { path: "/login", title: "Login" },
];

const Navbar = () => {
  return (
    <Box
      style={{
        backgroundColor: "green",
        display: "flex",
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
    </Box>
  );
};

export default Navbar;
