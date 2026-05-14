import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from '../store/authStore';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useAuthStore(
    (state: any) => state.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;