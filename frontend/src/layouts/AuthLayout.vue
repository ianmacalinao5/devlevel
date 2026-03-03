<script setup lang="ts">
import Logo from "@/assets/devlevel-logo.png";
</script>

<template>
    <div class="min-h-screen grid md:grid-cols-2">
        <div
            class="hidden md:flex flex-col items-center justify-center bg-emerald-600 text-white p-12"
        >
            <RouterLink to="/">
                <img
                    :src="Logo"
                    alt="DevLevel logo"
                    class="h-50 mb-6 drop-shadow drop-shadow-amber-50"
                />
            </RouterLink>

            <h1 class="text-4xl font-bold mb-3 text-emerald-100">DevLevel</h1>

            <p class="text-center text-white max-w-md text-lg">
                Track your growth, build consistency, and visualize your
                progress.
            </p>
        </div>

        <div class="flex items-center justify-center bg-gray-100 p-6">
            <div class="w-full max-w-md">
                <RouterView />
            </div>
        </div>
    </div>
</template>
