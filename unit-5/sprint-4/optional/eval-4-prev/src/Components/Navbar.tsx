import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>StudentSenate</h1>
       <Link to={"/"}>Home</Link>
       <Link to={"/vote"}>Vote</Link>
       <Link to={"/result"}>Result</Link>
    </div>
  )
}

export default Navbar