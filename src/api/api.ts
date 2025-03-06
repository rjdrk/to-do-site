import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(import.meta.env.VITE_API_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

// Métodos para interactuar con la API
export const getRequest = async (url: string, params = {}) => {
    return api.get(url, { params });
};

export const postRequest = async (url: string, data = {}) => {
    return api.post(url, data);
};

export const patchRequest = async (url: string, data = {}) => {
    return api.patch(url, data);
};

export const deleteRequest = async (url: string) => {
    return api.delete(url);
};

export default api;
