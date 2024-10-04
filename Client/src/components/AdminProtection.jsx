import { Navigate } from 'react-router-dom';

// AdminProtection component
// eslint-disable-next-line react/prop-types
const AdminProtection = ({ children }) => {
  // Get token and role from localStorage
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Check if token exists and role is 'admin'
  if (token && role === 'admin') {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminProtection;