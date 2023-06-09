import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div
      className="navbar"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Link to="/coffee-data" style={{ textDecoration: "none" }}>
        CoffeeData
      </Link>
      <Link to="/employee-data" style={{ textDecoration: "none" }}>
        EmployeeData
      </Link>
      <Link to="/restaurant-data" style={{ textDecoration: "none" }}>
        RestaurantData
      </Link>
    </div>
  );
}

export { Navbar };
