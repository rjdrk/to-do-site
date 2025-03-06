import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import login from '../api/auth/login';

interface LoginContextType {
    user: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (storedUser && token) {
            setUser(storedUser);
        }
    }, []);

    const loginAuth = async (email: string, password: string) => {
        try {
            const token = await login(email, password);
            if (!token) {
                throw new Error("No se recibió un token válido.");
            }
            localStorage.setItem("user", email);
            localStorage.setItem("token", token);
            setUser(email);
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
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <LoginContext.Provider
            value={{
                user,
                login: loginAuth,
                logout,
                isAuthenticated: !!user
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useAuth debe de estar dentro de un LoginProvider");
    }
    return context
}
