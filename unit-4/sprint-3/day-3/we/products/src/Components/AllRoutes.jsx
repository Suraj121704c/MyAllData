import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import { Cart } from "../Pages/Cart";
import { SingleProduct } from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import { PageNotFound } from "../Pages/PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      {/* Passing Param */}
      <Route
        path="/products/:products_id"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      />
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
