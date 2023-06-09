import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { auth } = useSelector((store) => store.authReducer);
  const location = useLocation();
  // console.log(location);
  return auth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace={true} />
  );
};
