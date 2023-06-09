import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useSelector((store) => store.authReducer);
  // console.log(isAuth)
  const location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace={true} />
  );
};
