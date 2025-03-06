import { createContext, ReactNode, useEffect, useState } from "react";
import login from '../api/login';
import { jwtDecode } from "jwt-decode";
import { getToken, removeToken } from "../utils/token";

interface LoginContextType {
    user: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkTokenValidity();
    }, []);

    const checkTokenValidity = () => {
        const token = getToken();
        if (token) {
            try {
                const decoded: { exp: number; email: string } = jwtDecode(token);
                const now = Math.floor(Date.now() / 1000);

                if (decoded.exp > now) {
                    setUser(decoded.email);
                    setIsAuthenticated(true);
                } else {
                    logout();
                }
            } catch (error) {
                logout();
                throw new Error(`Error: ${error}`);
            }
        }
        setIsLoading(false);
    };

    // Función para programar la expiración automática del token
    const scheduleAutoLogout = (expiresInSeconds: number) => {
        setTimeout(() => {
            logout();
        }, expiresInSeconds * 1000); // Convertir a milisegundos
    };

    const loginAuth = async (email: string, password: string) => {
        try {
            const token = await login(email, password);
            if (!token) {
                throw new Error("No se recibió un token válido.");
            }
            const decoded: { exp: number; email: string } = jwtDecode(token);
            setUser(decoded.email);
            setIsAuthenticated(true);
            scheduleAutoLogout(decoded.exp - Date.now() / 1000);
        } catch (error) {
            if (error instanceof Error) {
                console.log("Error: ", error.message);
                throw new Error(error.message);
            } else {
                console.log("Error desconocido: ", error);
                throw new Error("Error de autenticación.");
            }
        }
    }
    const logout = () => {
        //("user");
        removeToken();
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <LoginContext.Provider
            value={{
                user,
                login: loginAuth,
                logout,
                isAuthenticated,
                isLoading
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContext;