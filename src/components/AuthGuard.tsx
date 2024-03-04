import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (
    isAuthenticated &&
    !location.pathname.includes("login") &&
    location.pathname === "/"
  ) {
    return <Navigate to={user?.role == "employer" ? "hire" : "jobs"} />;
  }

  return children;
};

export const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  } else return children;
};
