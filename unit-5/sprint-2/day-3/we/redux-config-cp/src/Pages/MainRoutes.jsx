import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Todos from "../Components/Todo";
import PrivateRoutes from "./PrivateRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/todo"
        element={
          <PrivateRoutes>
            <Todos />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
