import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

  return sessionId ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
