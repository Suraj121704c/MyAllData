import React from "react"
import { createContext } from "react";

export const AuthContext = createContext()

function AuthContextProvider( {children} ) {
    const [isAuth,setIsAuth] = React.useState(false)
    const [token,setToken] = React.useState(null)

    const login = (token) => {
      setToken(token)
      setIsAuth(true)
    }

    const logout = () => {
        setToken(null)
        setIsAuth(false)
    }

    const authState = {isAuth,token}

    return <AuthContext.Provider value={{authState,isAuth,token,login,logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
