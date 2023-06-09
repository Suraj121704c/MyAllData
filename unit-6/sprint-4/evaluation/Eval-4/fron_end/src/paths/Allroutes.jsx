import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import Create from "../pages/Create";
import { Patch } from "../pages/Patch";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/create" element={<Create />} />
      <Route path="/posts/patch/:id" element={<Patch />} />
    </Routes>
  );
};
