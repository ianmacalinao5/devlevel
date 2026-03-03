<script setup lang="ts">
import { ref } from "vue";

import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";

const email = ref("hello");
const password = ref("password");

const showPassword = ref(false);

function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
}
</script>

<template>
    <section class="px-3 py-2 space-y-4">
        <h1 class="text-2xl font-semibold text-slate-800">Login</h1>

        <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input
                type="email"
                placeholder="email@example.com"
                id="email"
                v-model="email"
            />
        </div>

        <div class="space-y-2">
            <Label for="password">Password</Label>
            <Input
                :type="showPassword ? 'text' : 'password'"
                placeholder="***********"
                id="password"
                v-model="password"
                class="flex items-center"
            />
        </div>

        <Button @click="togglePasswordVisibility">
            {{ showPassword ? "Hide" : "Show" }} Password
        </Button>

        <Button variant="emerald" class="w-full">Login</Button>
    </section>
</template>
