import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Add your authentication check logic here
  const isAuthenticated = false; // Replace with actual auth check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute; 