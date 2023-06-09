import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Notes } from "../Pages/Notes";
import Create from "../Pages/updates";
import Patch from "../Pages/patch";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/notes/patch/:id" element={<Patch />} />
        </Routes>)
}

export default AllRoutes