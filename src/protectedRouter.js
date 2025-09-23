import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

const ProtectedRouter = () => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
};

export default ProtectedRouter;
