import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token =
    localStorage.getItem("token");

  if (!token) {

    alert(
      "Please login first to continue."
    );

    return <Navigate to="/login" />;

  }

  return children;

}

export default ProtectedRoute;