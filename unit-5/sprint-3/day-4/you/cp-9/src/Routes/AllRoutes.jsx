import React from "react";
import { Routes, Route } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import RestaurantData from "../Components/RestaurantData";
import EmployeeData from "../Components/EmployeeData";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CoffeeData />} />
      <Route path="/coffee-data" element={<CoffeeData />} />
      <Route path="/restaurant-data" element={<RestaurantData />} />
      <Route path="/employee-data" element={<EmployeeData />} />
    </Routes>
  );
};

export { AllRoutes };
