<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="border-b p-4 flex justify-between items-center">
            <h1 class="font-bold text-lg">MyApp</h1>

            <nav class="space-x-4">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/site/about">About</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </nav>
        </header>

        <!-- Page Content -->
        <main class="flex-1 p-6">
            <RouterView />
        </main>

        <!-- Footer -->
        <footer class="border-t p-4 text-center text-sm">© 2026 MyApp</footer>
    </div>
</template>
