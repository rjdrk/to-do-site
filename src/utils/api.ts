import axios from "axios";
import { getToken } from "./token";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use((config) => {
    const token = getToken();
    console.log("Token:", token);
    if (token !== null && token !== undefined && token !== "undefined") {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        console.log("No hay token o es undefined/null");
    }

    return config;
})

// Métodos para interactuar con la API
export const getRequest = async (url: string, params = {}) => {
    return api.get(url, { params });
};

export const postRequest = async (url: string, data = {}) => {
    console.log("data: ", data);
    return api.post(url, data);
};

export const patchRequest = async (url: string, data = {}) => {
    return api.patch(url, data);
};

export const deleteRequest = async (url: string) => {
    return api.delete(url);
};

export default api;
