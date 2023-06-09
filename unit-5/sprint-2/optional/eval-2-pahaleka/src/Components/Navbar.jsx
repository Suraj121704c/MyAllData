import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar" style={{display : "flex" , justifyContent : "space-evenly"}}>
      <Link to={"/coffee"} style={{ textDecoration: "none" }}>
        Coffee Data
      </Link>
      <Link to={"/employee"} style={{ textDecoration: "none" }}>
        Employee Data
      </Link>
      <Link to={"/restaurent"} style={{ textDecoration: "none" }}>
        Restaurant Data
      </Link>
      <Link></Link>
    </div>
  );
}

export { Navbar };
