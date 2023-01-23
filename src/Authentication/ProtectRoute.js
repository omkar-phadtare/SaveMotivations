import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    alert("Not a User")
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;