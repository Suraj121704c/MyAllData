import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const loginUser = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logoutUser = () => {
    setIsAuth(false);
    setToken(null);
  };

  const authState = {isAuth,token}

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
