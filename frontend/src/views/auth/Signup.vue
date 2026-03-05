<script setup lang="ts">
import { Eye, EyeOff } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import Spinner from "@/components/ui/spinner/Spinner.vue";
import { useSignup } from "@/composables/auth/useSignup";

const {
    name,
    nameError,
    email,
    emailError,
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
    errorClass,
    showPassword,
    showConfirmPassword,
    loading,
    togglePasswordVisibility,
    signup,
} = useSignup();
</script>

<template>
    <section class="px-3 py-2 max-w-md">
        <form @submit.prevent="signup" class="space-y-6" novalidate>
            <h1 class="text-2xl font-semibold text-slate-800 mb-5">Sign Up</h1>

            <div class="space-y-2">
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    v-model="name"
                    class="py-5"
                    :class="nameError ? errorClass : 'outline'"
                />
                <p v-if="nameError" class="text-red-500 text-sm">
                    {{ nameError }}
                </p>
            </div>

            <div class="space-y-2">
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    v-model="email"
                    class="py-5"
                    :class="emailError ? errorClass : 'outline'"
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
                        :class="passwordError ? errorClass : ''"
                    />

                    <button
                        type="button"
                        @click="togglePasswordVisibility('password')"
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

            <div class="space-y-2">
                <Label for="confirmPassword">Confirm Password</Label>

                <div class="relative">
                    <Input
                        id="confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Confirm Password"
                        v-model="confirmPassword"
                        class="pr-10 py-5"
                        :class="confirmPasswordError ? errorClass : ''"
                    />

                    <button
                        type="button"
                        @click="togglePasswordVisibility('confirm')"
                        class="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700 cursor-pointer"
                    >
                        <component
                            :is="showConfirmPassword ? EyeOff : Eye"
                            class="w-5 h-5"
                        />
                    </button>
                </div>

                <p v-if="confirmPasswordError" class="text-red-500 text-sm">
                    {{ confirmPasswordError }}
                </p>
            </div>

            <Button
                type="submit"
                variant="emerald"
                class="w-full"
                :disabled="loading"
            >
                <span class="flex items-center justify-center gap-2">
                    <Spinner v-if="loading" />
                    {{ loading ? "Signing Up..." : "Sign Up" }}
                </span>
            </Button>

            <p class="text-center">
                Have an account?
                <RouterLink
                    to="/login"
                    class="hover:underline hover:text-emerald-600"
                >
                    Log in here
                </RouterLink>
            </p>
        </form>
    </section>
</template>
