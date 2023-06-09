import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import ProductsDetails from "../Pages/ProductsDetails";
import ProductNotFoundPage from "../Pages/ProductNotFoundPage";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products/:prouducts_id"
          element={
            <PrivateRoute>
              <ProductsDetails />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<ProductNotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
