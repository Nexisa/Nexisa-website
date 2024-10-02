// import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  // Check if token is available in localStorage
  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem("token")) : null; // adjust key based on your app's token storage
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
