<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Button from "./ui/button/Button.vue";

const route = useRoute();

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
];

const isActive = computed(() => (path: string) => route.path === path);
</script>

<template>
    <nav class="flex items-center gap-6">
        <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-medium transition-colors duration-200"
            :class="
                isActive(link.path)
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-500'
            "
        >
            {{ link.name }}
        </RouterLink>

        <Button variant="emerald">Login</Button>
    </nav>
</template>
