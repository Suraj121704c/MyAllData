import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Result } from "./Result";
import { Vote } from "./Vote";
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};
