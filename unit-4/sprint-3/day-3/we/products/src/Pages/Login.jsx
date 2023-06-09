import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/products" />;
  }
  return (
    <div>
      <h1>This is our Loign Page .....</h1>
      <button disabled={isAuth} onClick={login}>
        LOGIN
      </button>
    </div>
  );
};

export default Login;
