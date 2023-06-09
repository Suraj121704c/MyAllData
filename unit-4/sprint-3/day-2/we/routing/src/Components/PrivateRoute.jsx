import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"

//1.if a user is authenticated send him to use the page.
//2.Else redirect him to the homepage

function PrivateRoute ( {children} ) {

    const { isAuth } = useContext(AuthContext)

   if(!isAuth){
    return <Navigate to="/" />
   }

   return children;
}
export default PrivateRoute;