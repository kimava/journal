import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserId } from '../users/userSlice';

const RequireAuth = ({ children }) => {
  const userId = useSelector(selectUserId);

  if (!userId) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default RequireAuth;
