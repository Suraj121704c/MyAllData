import React from "react";
import { Routes, Route } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import RestaurantData from "../Components/RestaurantData";
import EmployeeData from "../Components/EmployeeData";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CoffeeData />} />
      <Route path="/coffee" element={<CoffeeData />} />
      <Route path="/employee" element={<EmployeeData />} />
      <Route path="/restaurent" element={<RestaurantData />} />
    </Routes>
  );
};

export { AllRoutes };
