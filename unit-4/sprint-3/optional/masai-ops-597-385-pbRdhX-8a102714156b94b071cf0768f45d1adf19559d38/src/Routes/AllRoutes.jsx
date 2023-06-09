import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route,Routes } from "react-router-dom";

function AllRoutes() {
  return <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  </div>;
}

export default AllRoutes;
