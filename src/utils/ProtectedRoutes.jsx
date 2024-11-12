import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = null; // Adjust this to your actual auth logic
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
