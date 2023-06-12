import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login" />
    }

    return children
}

//private route is like a wrapper component
export default PrivateRoute