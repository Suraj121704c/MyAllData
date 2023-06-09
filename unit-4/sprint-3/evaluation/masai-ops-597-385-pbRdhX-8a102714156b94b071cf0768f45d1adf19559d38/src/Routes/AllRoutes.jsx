import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Dashboard from "./Dashboard.jsx";

function AllRoutes() {
  return <div>
    {/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </div>;
}

export default AllRoutes;
