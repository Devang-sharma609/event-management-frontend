import { ReactNode } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Navigate, useLocation } from "react-router";

interface ProtectedRouteProperties {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProperties> = ({ children }) => {
  const { isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    localStorage.setItem(
      "redirectPath",
      globalThis.location.pathname + globalThis.location.search,
    );
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
