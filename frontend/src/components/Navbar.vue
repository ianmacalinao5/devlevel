<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Button from "./ui/button/Button.vue";
import { useAuthStore } from "@/stores/useAuthStore";

const user = useAuthStore();
const route = useRoute();

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
];

const isAuthenticated = computed(() =>
    user.isAuthenticated ? "/dashboard" : "/login",
);
const isActive = computed(() => (path: string) => route.path === path);
</script>

<template>
    <nav class="flex items-center gap-7">
        <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-medium transition-colors duration-200"
            :class="
                isActive(link.path)
                    ? 'text-emerald-600'
                    : 'text-foreground/70 hover:text-emerald-500'
            "
        >
            {{ link.name }}
        </RouterLink>

        <RouterLink :to="isAuthenticated">
            <Button variant="emerald">{{
                user.isAuthenticated ? "Dashboard" : "Login"
            }}</Button>
        </RouterLink>
    </nav>
</template>
