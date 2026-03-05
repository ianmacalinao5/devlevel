import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const isAuthenticated = ref(false);
    const user = ref<{ email: string; name: string } | null>(null);

    function login(email: string, password: string) {
        if (email === "test@example.com" && password === "password") {
            user.value = { email, name: "Test User" };
            isAuthenticated.value = true;
            return true;
        }

        return false;
    }

    function logout() {
        user.value = null;
        isAuthenticated.value = false;
    }

    return { user, isAuthenticated, login, logout };
});
