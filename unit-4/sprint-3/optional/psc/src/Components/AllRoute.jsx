import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Login from "../Pages/login";
import NotFound from "../Pages/NotFound";
import Contact from "../Pages/Contact";
import SingleProduct from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";


const AllRoutes = () => {
    return (
        <div>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/products" element={
            <PrivateRoute>   
            <Products />
            </PrivateRoute> 
            }/>
            <Route path="/contact" element={<Contact />}/>
            {/* For accessing single page we are defining params with(:) */}
            <Route path="/products/:products_id" element={
            <PrivateRoute>  
            <SingleProduct />
            </PrivateRoute>  
            }/>
            <Route path="*" element={<NotFound />}/>
         </Routes>
        </div>
    )
}

export default AllRoutes