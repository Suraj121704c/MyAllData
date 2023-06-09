import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext';
import Button from './Button';


const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    const {isAuth,login,logout} = useContext(AuthContext)

  return (
    <div style={{
        border: theme === "dark" ? "1px solid white" : "1px solid black",
        margin:0,
        display:"flex",
        justifyContent:"space-around"
    }}>
        <h4>Company Logo</h4>
        <div 
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
        }}
        >
         <p>USER AUTHENTICATED : {isAuth ? "YES" : "NO"}</p>
         <Button onClick={login} btnText="LOGIN"/>
         <Button onClick={logout} btnText="LOGOUT"/>
        </div>   
    </div>
  )
}

export default Navbar
