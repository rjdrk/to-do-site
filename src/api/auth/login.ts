import { postRequest } from "../api";

const login = async (email: string, password: string) => {
    try {
        const response = await postRequest("/login", { email, password });
        const token = response.data.data.token;
        localStorage.setItem("token", token)
        return token;
    } catch (error) {
        console.log("Error en login: ", error);
        throw error;
    }
}

export default login;