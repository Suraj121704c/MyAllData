import React from 'react';

export const AuthContext = React.createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = React.useState(false);
    const [token,setToken] = React.useState("");

    const login = (token)=> {
        setToken(token)
        setIsAuth(true);
    }
    const logout = (toke) => {
        setToken(null)
        setIsAuth(false)
    }

    const value = {isAuth,login,logout,token}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
