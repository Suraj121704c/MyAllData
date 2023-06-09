import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

function PrivateRoute({children}) {
    const { authState } = useContext(AuthContext)
    if(!authState.isAuth){
        return <Navigate to="/login" />
     }
 
     return children
}

export default PrivateRoute;
