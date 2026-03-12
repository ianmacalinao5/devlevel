import api from "./api";

export async function updateAvatar(formData: FormData) {
    const { data } = await api.post("/profile/avatar", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return data;
}

export async function updateName(name: string) {
    const res = await api.patch("/profile/name", { name });
    return res.data;
}

export async function deleteAccount() {
    return api.delete("/profile");
}
