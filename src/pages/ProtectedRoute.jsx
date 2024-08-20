import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/context-hooks";

const ProtectedRoute = (prop) => {
    const {children} = prop;
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) navigate("/")
    }, [isAuthenticated, navigate])

  return (
    isAuthenticated ? children : null
    // children
  )
};

export default ProtectedRoute;
