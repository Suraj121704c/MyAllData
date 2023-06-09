import React from 'react'
import { Link } from "react-router-dom";

const links = [
    {path:"/" , title: "Home"},
    {path:"/contact" , title: "Contact"},
    {path:"/about" , title: "About"},
    {path:"/login" , title: "Login"},
    {path:"/products" , title: "Products"},
]

const Navbar = () => {

  return (
    <div style={{
        backgroundColor:"green",
        display:"flex",
        justifyContent:"space-evenly",
        padding:"20px"
    }}>
      {
        links.map((link)=>(
            <Link style={{textDecoration:"none",
            color:"red",
            fontSize:"20px",
            fontWeight:"bold"
            }}
            key={link.path}
            to={link.path}
            >{link.title}</Link>
        ))
      }
    </div>
  )
}

export default Navbar
