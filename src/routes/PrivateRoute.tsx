import { Navigate } from "react-router-dom";
import { JSX } from "react";
import useLogin from "../hooks/useLogin";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, isLoading } = useLogin();

    if (isLoading) {
        return <div>🔄 Verificando sesión...</div>;
    }
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;