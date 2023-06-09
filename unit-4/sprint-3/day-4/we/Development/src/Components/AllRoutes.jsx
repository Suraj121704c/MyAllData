import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Users from "../Pages/Users";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import UserPage from "../Pages/UserPage";
import PageNotFound from "../Pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      ></Route>

      {/* Passing Params */}
      <Route
        path="/users/:user_id"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      ></Route>

      {/* // Page Not Found  */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
