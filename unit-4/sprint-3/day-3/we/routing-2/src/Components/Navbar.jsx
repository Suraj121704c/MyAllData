import React from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";

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
    const {isAuth} = useContext(AuthContext)
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
        <p>IS USER AUTHENTICATED : {isAuth ? "YES" : "NO"}</p>
      </div>
    </div>
  );
};

export default Navbar;
