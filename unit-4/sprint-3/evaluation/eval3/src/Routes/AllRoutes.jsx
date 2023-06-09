import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";
import SingleRestaurantPage from "./SingleRestaurantPage.jsx";
import PrivateRoute from "../Components/PrivateRoute.jsx";


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
          path="/restaurants/:id"
          element={
            <PrivateRoute>
              <SingleRestaurantPage />
            </PrivateRoute>
          }
        />
      </Routes>
  );
}

export default AllRoutes;
