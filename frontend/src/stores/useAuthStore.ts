import { defineStore } from "pinia";
import { ref } from "vue";
import * as authService from "@/services/auth";
import type { User } from "@/types/user";
import type { AuthResponse } from "@/types/auth";

export const useAuthStore = defineStore("auth", () => {
    const isAuthenticated = ref(false);
    const isReady = ref(false);

    const user = ref<User | null>(null);

    const token = ref<string | null>(localStorage.getItem("token"));

    function setAuth(data: AuthResponse) {
        user.value = data.user;
        token.value = data.token;
        isAuthenticated.value = true;

        localStorage.setItem("token", data.token);
    }

    function updateUser(data: Partial<User>) {
        if (!user.value) return;
        user.value = { ...user.value, ...data };
    }

    async function initialize() {
        if (!token.value) {
            isReady.value = true;
            return;
        }

        await fetchUser();
    }

    async function fetchUser() {
        try {
            const res = await authService.getUser();
            user.value = res;
            isAuthenticated.value = true;
        } catch (error) {
            logout();
        } finally {
            isReady.value = true;
        }
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
            localStorage.removeItem("token");
        }
    }

    return {
        user,
        token,
        isAuthenticated,
        isReady,
        setAuth,
        updateUser,
        fetchUser,
        initialize,
        logout,
    };
});
