import api from "./api";

export async function login(email: string, password: string) {
    const response = await api.post("/login", { email, password });
    return response.data;
}

export async function signup(
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
) {
    const response = await api.post("/signup", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
    });

    return response.data;
}

export async function logout() {
    const response = await api.post("/logout");
    return response.data;
}

export async function getUser() {
    const response = await api.get("/user");
    return response.data;
}
