import {Link} from "react-router-dom";

const links = [
    {path:"/login",title:"Login"},
    {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/contact",title:"Contact"},
    {path:"/products",title:"Products"},
]

function Navbar() {
    return(
        <div style={{
      backgroundColor:"lightcoral",color:"white",
            display:"flex",
        alignItems:"center",
        padding:"10px",
        justifyContent:"space-evenly"
    }} className = "navbar" >
         {
            links.map((link)=>(
                <Link style={{textDecoration:"none",
            color:"black"}} key={link.path} to={link.path}>{link.title}</Link>
            ))
         }
        </div>
    )
}

export { Navbar }