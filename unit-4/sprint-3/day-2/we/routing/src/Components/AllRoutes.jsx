import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Users from "../Pages/Users";
import Contact from "../Pages/Contac";
import SingleUserPage from "../Pages/SingleUserPage.jsx";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";

function AllRoutes() {
    return (
    <Routes>
        {/* public */}
     <Route path="/" element={<Home />}/>
        {/* public */}
     <Route path="/about" element={<About />}/>
        {/* public */}
     <Route path="/contact" element={<Contact />}/>
       {/* Private */}
     <Route path="/users" element={
     <PrivateRoute>
     <Users />
     </PrivateRoute>
     }/>
       {/* Private */} 
     <Route path="/users/:user_id" element={
     <PrivateRoute>  
     <SingleUserPage />
     </PrivateRoute> }/>
     {/* Down Side link will be going to work when we enter the wrong link  */}
        {/* public */}
     <Route path="/login" element={<Login />} />
     <Route path="*" element={<NotFound />}/>
    </Routes>
    )
}

export default AllRoutes;