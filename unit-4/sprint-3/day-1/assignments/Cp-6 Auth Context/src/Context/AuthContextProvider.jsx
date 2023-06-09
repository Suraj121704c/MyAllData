import React, {Children, useState} from 'react'
import { createContext } from 'react';

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {

  const [isAuth,setIsAuth] = React.useState(false);
  const [token,setToken] = React.useState(null);
  
  const login = (token) => {
   setToken(token)
   setIsAuth(true)
  }

  const logout = () => {
    setToken(null)
    setIsAuth(false)
  }

  const autState = {isAuth,token}

  return (
    <AuthContext.Provider value={{autState,isAuth,token,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}
