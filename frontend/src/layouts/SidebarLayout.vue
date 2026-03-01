teplat
<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-900 text-white p-5 space-y-4">
            <h2 class="text-lg font-bold">Dashboard</h2>

            <nav class="flex flex-col space-y-2">
                <RouterLink to="/app/dashboard">Dashboard</RouterLink>
                <RouterLink to="/app/users">Users</RouterLink>
                <RouterLink to="/app/settings">Settings</RouterLink>
            </nav>
        </aside>

        <!-- Content -->
        <div class="flex-1 flex flex-col">
            <!-- Topbar -->
            <header class="border-b p-4 flex justify-between">
                <span>Welcome back 👋</span>
                <button class="text-sm">Logout</button>
            </header>

            <!-- Page -->
            <main class="p-6 flex-1">
                <RouterView />
            </main>
        </div>
    </div>
</template>
