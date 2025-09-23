import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./contexts/AuthProvider/context";
import { useContext } from "react";
import Router from "../../router";

const ProtectedRouter = () => {
  const { userState } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  const location = useLocation();

  console.log("isAuthenticated", isAuthenticated);
  console.log("location", location);

  return isAuthenticated ? <Router /> : <Navigate to="/" replace state={{ from: location }} />;
};

export default ProtectedRouter;
