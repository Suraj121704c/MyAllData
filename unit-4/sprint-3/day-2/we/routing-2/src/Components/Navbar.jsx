import React from "react";
import { Link,NavLink } from "react-router-dom";

const links = [
    {path : "/" , title : "Home"},
    {path : "/about" , title : "About"},
    {path : "/contact" , title : "Contact"},
    {path : "/login" , title : "Login"},
    {path : "/users" , title : "Users"},
]

const Navbar = () => {
    const defaultLinkStyle = {textDecoration:"none",color:"teal"};
    const activeLinkStyle = {textDecoration:"none",color:"red"}
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <Link style={{textDecoration:"none" , color :"black"}} to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/users">USERS</Link> */}
        {
            links.map(({path,title}) => (
                <NavLink 
                style={({isActive}) => {
                    return isActive ? activeLinkStyle : defaultLinkStyle
                }}
                key={path} to={path}>{title}</NavLink>
            ))
        }
      </div>
    </div>
  );
};

export default Navbar;
