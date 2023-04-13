import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children, redirectPath = "/" }) => {
  if (isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
export default ProtectedRoute;
