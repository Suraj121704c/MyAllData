import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const auth = useSelector((store) => store.auth.auth);
  return !auth ? <Navigate to={"/login"} /> : children;
};

export default PrivateRoutes;
