import React from 'react'
import { Link } from 'react-router-dom';
const links = [
  {path : "/" , title : "Home"},
  {path : "/about-us" , title:"About"},
  {path : "/contact" , title:"Contact"},
  {path : "/services" , title:"Services"},
  {path : "/login" , title:"Login"}
]

function NavBar() {
  return (
    <>
      {links.map((link)=>(
            <Link key={link.path} to={link.path}>{link.title}</Link>
        ))}
    </>
  )
}

export default NavBar
