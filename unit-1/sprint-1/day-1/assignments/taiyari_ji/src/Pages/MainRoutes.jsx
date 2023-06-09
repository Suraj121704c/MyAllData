import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import {StudentDetails} from "./StudentDetails";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/student/:id"
        element={
          <PrivateRoute>
            <StudentDetails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
