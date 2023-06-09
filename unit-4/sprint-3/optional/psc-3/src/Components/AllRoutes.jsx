import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { About } from "../Pages/About";
import SingleProduct from "../Pages/SingleProduct";
import { Contact } from "../Pages/Contact";
import Products from "../Pages/Products";
import NotFound from "../Pages/NotFound";
import { Login } from "../Pages/login";
import { PrivateRoute } from "./PrivateRoute";
import { SingleAboutPage } from "../Pages/SingleAboutPage";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* Passing Param */}
        <Route
          path="/products/:prouducts_id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route path="/about/:about_id" element={
          <PrivateRoute>
            <SingleAboutPage />
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
};
