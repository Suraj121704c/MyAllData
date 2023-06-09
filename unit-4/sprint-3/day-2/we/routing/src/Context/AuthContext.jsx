import React from "react";

export const AuthContext = React.createContext()

function AuthContextProvider ( {children} ) {
    const [isAuth,setIsAuth] = React.useState(false)

    // const toogleAuth = ( ) => {
    //     setIsAuth(!isAuth);
    // }

    const login = () => {
        setIsAuth(true);
    }
    const logout = () => {
        setIsAuth(false)
    } 
    const value = {isAuth,login,logout}

    return <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
 }

export default AuthContextProvider;

//Follow C-P-C Rule 