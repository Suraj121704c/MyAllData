import React from "react"

//Creating a context
export const AuthContext = React.createContext()

//Giving it a provider 
function AuthContextProvider ( { children } ){
    const [isAuth,setIsAuth] = React.useState(false)

    const login = () => {
        setIsAuth(true)
    }
    const logout = () => {
        setIsAuth(false)
    }
    const value = {isAuth,login,logout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider