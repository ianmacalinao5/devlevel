import { defineStore } from "pinia";
import { ref } from "vue";
import * as authService from "@/services/auth";

export const useAuthStore = defineStore("auth", () => {
    const isAuthenticated = ref(false);
    const user = ref<{ email: string; name: string } | null>(null);
    const token = ref<string | null>(null);

    function setAuth(data: {
        user: { email: string; name: string };
        token: string;
    }) {
        user.value = data.user;
        token.value = data.token;
        isAuthenticated.value = true;
    }

    async function logout() {
        try {
            await authService.logout();
        } catch (error) {
            console.error("Logout request failed", error);
        } finally {
            user.value = null;
            token.value = null;
            isAuthenticated.value = false;
        }
    }

    return { user, token, isAuthenticated, setAuth, logout };
});
