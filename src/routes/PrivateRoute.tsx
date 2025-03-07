import { Navigate } from "react-router-dom";
import { JSX } from "react";
import useLogin from "../hooks/useLogin";
import Navbar from "../components/Navar";
import Sidebar from "../components/Sidebar";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, isLoading } = useLogin();

    if (isLoading) {
        return <div>🔄 Verificando sesión...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4 ml-64">{children}</main>
            </div>
        </div>
    );
};

export default PrivateRoute;