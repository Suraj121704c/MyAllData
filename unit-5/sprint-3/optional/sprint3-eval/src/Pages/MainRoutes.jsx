import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { MovieDetail } from "./MovieDetail";
import { PrivateRoutes } from "../Components/PrivateRoutes";
import Cart from "./Cart";
import { Admin } from "./Admin";
import { Edit } from "./Edit";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/movie/:id"
        element={
          <PrivateRoutes>
            <MovieDetail />
          </PrivateRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoutes>
            <Edit />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
