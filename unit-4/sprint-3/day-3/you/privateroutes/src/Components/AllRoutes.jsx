import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Settings from "../Pages/Setting";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
