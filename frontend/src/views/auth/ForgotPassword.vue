<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import Spinner from "@/components/ui/spinner/Spinner.vue";
import { useForgotPassword } from "@/composables/auth/useForgotPassword";

const { email, emailError, errorClass, loading, sendResetLink } =
    useForgotPassword();
</script>

<template>
    <section class="px-4 py-6 max-w-md mx-auto">
        <RouterLink
            to="/login"
            class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-slate-800 mb-6"
        >
            ← Back to login
        </RouterLink>

        <form @submit.prevent="sendResetLink" class="space-y-6" novalidate>
            <div class="space-y-1">
                <h1 class="text-2xl font-semibold text-slate-800">
                    Forgot Password
                </h1>
                <p class="text-sm text-muted-foreground">
                    Enter your email and we’ll send you a password reset link.
                </p>
            </div>

            <div class="space-y-2">
                <Label for="email">Email address</Label>
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

            <Button
                type="submit"
                variant="emerald"
                class="w-full"
                :disabled="loading"
            >
                <span class="flex items-center justify-center gap-2">
                    <Spinner v-if="loading" />
                    {{ loading ? "Sending reset link..." : "Send Reset Link" }}
                </span>
            </Button>

            <p class="text-xs text-center text-muted-foreground">
                Didn’t receive an email? Check your spam folder.
            </p>
        </form>
    </section>
</template>
