import { postRequest } from "../utils/api";
import { setToken } from "../utils/token";

const login = async (email: string, password: string) => {
    try {
        const response = await postRequest("/login", { email, password });
        const token = response.data.data.token;
        setToken(token);
        return token;
    } catch (error) {
        console.log("Error en login: ", error);
        throw error;
    }
}

export default login;