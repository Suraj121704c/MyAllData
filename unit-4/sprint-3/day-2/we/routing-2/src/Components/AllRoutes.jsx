import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Users from '../Pages/Users';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Login from '../Pages/Login';
import UserPage from '../Pages/UserPage';

const AllRoutes = () => {
  return (
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/about' element={<About />}></Route>
     <Route path='/contact'element={<Contact />}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/users' element={<Users />}></Route>
     {/* Passing Params */}
     <Route path='/users/:user_id' element={<UserPage />}></Route>
    </Routes>
  )
}

export default AllRoutes
