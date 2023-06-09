import { Link , NavLink } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

const links = [
    {path : "/" , title : "Home"},
    {path : "/about" , title:"About"},
    {path : "/contact" , title:"Contact"},
    {path : "/users" , title:"Users"},
    {path : "/login" , title:"Login"}
]

function Navbar () {
    const {isAuth , logout} = useContext(AuthContext)
    const defaultLinkStyle = {
        textDecoration : "none",
        color : "black"
    }
     
    const activeLinkStyle = {
        textDecoration : "none",
        color : "green"
    }

    return (
<div style={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        background:"Pink",
        padding:"10px",
        color:"white"
        }}>
    {/* //Normally Assigning */}
    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/users">Users</Link> */}
    {/* //Assigning in map way with Link */}
    {/* {
        links.map((link)=>(
            <Link key={link.path} to={link.path}>{link.title}</Link>
        ))
    } */}
    {/* //Assigning with NavLink */}
    {
        links.map((link)=>(
            <NavLink style={( {isActive} )=>{
                return isActive ? activeLinkStyle : defaultLinkStyle
            }} key={link.path} to={link.path}>{link.title}</NavLink>
        ))
    }
    <p style={{color:"black"}}>Is User Authenticated : {isAuth ? "YES" : "NO"}</p>
    <button disabled={!isAuth} onClick={logout}>LOGOUT</button>
</div>
    );
}
export default Navbar