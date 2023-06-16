import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Create from "../Pages/Create";
import Blog from "../Pages/Blog";
import Signup from "../Pages/Logout";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
};
