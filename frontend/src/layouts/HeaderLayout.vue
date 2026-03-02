<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Logo from "@/assets/devlevel-logo.png";
</script>

<template>
    <div class="w-full bg-gray-50">
        <header class="border-b sticky top-0 z-50 bg-white/80 backdrop-blur">
            <div
                class="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center"
            >
                <div class="flex items-end gap-3">
                    <img :src="Logo" alt="DevLevel logo" class="h-8 w-8" />
                    <h1 class="font-semibold text-gray-800 text-xl">
                        DevLevel
                    </h1>
                </div>

                <Navbar />
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-5 py-2">
            <RouterView />
            <Footer />
        </main>
    </div>
</template>
