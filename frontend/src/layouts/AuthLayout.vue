<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white shadow rounded-xl p-6">
            <!-- Logo / Title -->
            <div class="text-center mb-6">
                <h1 class="text-xl font-bold">Welcome</h1>
                <p class="text-sm text-gray-500">Sign in to continue</p>
            </div>

            <!-- Auth Page -->
            <RouterView />
        </div>
    </div>
</template>
