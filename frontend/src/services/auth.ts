import api from "./api";

export const login = async (email: string, password: string) => {
    const response = await api.post("/login", {
        email,
        password,
    });

    return response.data;
};

export const signup = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
) => {
    const response = await api.post("/signup", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
    });

    return response.data;
};

export const logout = async () => {
    const response = await api.post("/logout");
    return response.data;
};

export const getUser = async () => {
    const response = await api.get("/user");
    return response.data;
};
