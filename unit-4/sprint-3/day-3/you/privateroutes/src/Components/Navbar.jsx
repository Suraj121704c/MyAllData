import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const links = [
    {path : "/" , title : "Home"},
    {path : "/login" , title : "Login"},
    {path : "/dashboard" , title : "Dashboard"},
    {path : "/dashboard/settings" , title : "Settings"},   
]

function Navbar () {
    const { isAuth , logout } = useContext(AuthContext)
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            background:"black",
            padding:"10px",
            color:"white"
            }}>
        {
         links.map((link)=>(
          <Link style={{textDecoration:"none",color:"White"}} key={link.path} to={link.path}>
            {link.title}
          </Link>
         ))
        }
        <p style={{color:"blue"}}>Is User Authenticated : {isAuth ? "YES" : "NO"}</p>
        <button style={{color:"red",backgroundColor:"white"}} disabled={!isAuth} onClick={logout}>LOGOUT</button>
        </div>
    )

}

export default Navbar