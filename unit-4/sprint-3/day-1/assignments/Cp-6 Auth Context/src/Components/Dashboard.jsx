import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export const Dashboard = () => {
    const {logout,isAuth,token} = useContext(AuthContext);

    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" onClick={logout}>LOGOUT</button>
        </div>
    )
}
