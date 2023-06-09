import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about-us" element={<h1>This is About Page</h1>} />
        <Route path="/contact" element={<h1>This is Contact Page</h1>} />
        <Route path="/services" element={<h1>This is Services Page</h1>} />
        <Route path="/login" element={<h1>This is Login Page</h1>} />
      </Routes>
      ;
    </BrowserRouter>
  );
}

export default App;
