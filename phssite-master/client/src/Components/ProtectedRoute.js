import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};