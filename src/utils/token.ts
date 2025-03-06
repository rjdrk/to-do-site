export const getToken = (): string | null => {
    return localStorage.getItem("token");
};

export const setToken = (token: string): void => {
    localStorage.setItem("token", token);
};

export const removeToken = (): void => {
    localStorage.removeItem("token");
};

export const decodeToken = (token: string) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
        console.log(error)
        return null;
    }
};

export const isTokenValid = (token: string): boolean => {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return false;

    const now = Math.floor(Date.now() / 1000);
    return decoded.exp > now;
};