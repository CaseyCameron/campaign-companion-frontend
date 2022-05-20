import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (user) {
    return children;
  } else {
    return <Navigate to="/" replace />
  }
}
