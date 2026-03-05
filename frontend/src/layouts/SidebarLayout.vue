<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";

const user = useAuthStore();
const router = useRouter();

function logout() {
    user.logout;
    router.push("/");
}
</script>

<template>
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-900 text-white p-5 space-y-4">
            <h2 class="text-lg font-bold">Dashboard</h2>

            <nav class="flex flex-col space-y-2">
                <RouterLink to="/dashboard">Dashboard</RouterLink>
                <RouterLink to="/users">Users</RouterLink>
                <RouterLink to="/settings">Settings</RouterLink>
            </nav>
        </aside>

        <!-- Content -->
        <div class="flex-1 flex flex-col">
            <!-- Topbar -->
            <header class="border-b p-4 flex justify-between">
                <span>Welcome back 👋</span>
                <Button class="text-sm" @click="logout">Logout</Button>
            </header>

            <!-- Page -->
            <main class="p-6 flex-1">
                <RouterView />
            </main>
        </div>
    </div>
</template>
