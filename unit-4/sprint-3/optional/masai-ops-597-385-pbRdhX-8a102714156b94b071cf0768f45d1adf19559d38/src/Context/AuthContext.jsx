import { createContext } from "react";
import React from "react";


export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [isAuth,setIsAuth] = React.useState(false);
    const [token,setToken] = React.useState(null);

    const login = (token) => {
        setToken(token)
        setIsAuth(true)
    }

    const logout = () => {
        setIsAuth(false)
        setToken(null)
    }

    const authState = {isAuth,token}

    return (
        <AuthContext.Provider value={{authState,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
