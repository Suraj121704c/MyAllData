import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import Login from "./Login";
import { Admin } from "./Admin";
import { PrivateRouter } from "../Components/PrivateRouter";
import { EditProduct } from "./EditProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route
        path="/admin"
        element={
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRouter>
            <EditProduct />
          </PrivateRouter>
        }
      />
    </Routes>
  );
};
