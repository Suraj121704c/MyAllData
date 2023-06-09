import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate("/")
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "greenyellow", height: "50px" }}>
            <Link to={"/"} style={{ "marginTop": "10px", textDecoration: "none", fontSize: "20px", color: "blue" }}>Home</Link>
            <Link to={"/login"} style={{ "marginTop": "10px", textDecoration: "none", fontSize: "20px", color: "blue" }}>Login</Link>
            <Link to={"/register"} style={{ "marginTop": "10px", textDecoration: "none", fontSize: "20px", color: "blue" }}>Register</Link>
            <Link to={"/notes"} style={{ "marginTop": "10px", textDecoration: "none", fontSize: "20px", color: "blue" }}>Notes</Link>
            <Link to={"/create"} style={{ "marginTop": "10px", textDecoration: "none", fontSize: "20px", color: "blue" }}>Create-Notes</Link>

            <button style={{ height: "25px", marginTop: "12px", color: "red" }} onClick={handleLogOut}>
                Sign Out
            </button>
        </div>
    )
}

export default Navbar