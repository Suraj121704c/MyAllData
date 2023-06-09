import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const {login,isAuth} = useContext(AuthContext)
  
  return (
    <div>
      <h1>Login</h1>
      <button disabled={isAuth} onClick={login}>LOGIN</button>
    </div>
  )
}

export default Login
