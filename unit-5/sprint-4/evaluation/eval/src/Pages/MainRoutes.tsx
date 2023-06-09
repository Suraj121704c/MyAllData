import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddProduct } from "./AddProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
};
