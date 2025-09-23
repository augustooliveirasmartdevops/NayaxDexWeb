import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "./contexts/AuthProvider/context";
import { useContext } from "react";

const ProtectedRouter = () => {
  const { userState } = useContext(AuthContext);
  const { isAuthenticated } = userState;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
