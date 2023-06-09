import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (children) => {
  const auth = useSelector((state) => {
    // console.log(state.authReducer.isAuth)
    return state.authReducer.isAuth;
  });
  return <>{!auth ? <Navigate to={"/login"} /> : children}</>;
};
