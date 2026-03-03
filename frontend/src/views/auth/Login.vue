<script setup lang="ts">
import { Eye, EyeOff } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";

import { useLogin } from "@/composables/auth/useLogin";

const {
    email,
    emailError,
    password,
    passwordError,
    errorClass,
    showPassword,
    togglePasswordVisibility,
    login,
} = useLogin();
</script>

<template>
    <section class="px-3 py-2 max-w-md">
        <form @submit.prevent="login" class="space-y-6" novalidate>
            <h1 class="text-2xl font-semibold text-slate-800 mb-5">Login</h1>

            <div class="space-y-2">
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    v-model="email"
                    class="py-5"
                    :class="emailError && errorClass"
                    autocomplete="email"
                />
                <p v-if="emailError" class="text-red-500 text-sm">
                    {{ emailError }}
                </p>
            </div>

            <div class="space-y-2">
                <Label for="password">Password</Label>

                <div class="relative">
                    <Input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Password"
                        v-model="password"
                        class="pr-10 py-5"
                        :class="passwordError && errorClass"
                        autocomplete="current-password"
                    />

                    <button
                        type="button"
                        @click="togglePasswordVisibility"
                        class="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700 cursor-pointer"
                    >
                        <component
                            :is="showPassword ? EyeOff : Eye"
                            class="w-5 h-5"
                        />
                    </button>
                </div>
                <p v-if="passwordError" class="text-red-500 text-sm">
                    {{ passwordError }}
                </p>
            </div>

            <Button type="submit" variant="emerald" class="w-full">
                Log in
            </Button>

            <p class="text-center">
                Don’t have an account?
                <RouterLink
                    to="/signup"
                    class="hover:underline hover:text-emerald-600"
                >
                    Sign up here
                </RouterLink>
            </p>
        </form>
    </section>
</template>
