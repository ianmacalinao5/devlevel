<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import Button from "@/components/ui/button/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
    if (history.length > 1) {
        router.go(-1);
    } else {
        router.push("/");
    }
};
</script>

<template>
    <main class="min-h-screen flex items-center justify-center p-4">
        <Card class="p-10">
            <div class="space-y-2">
                <h1 class="text-2xl font-semibold text-slate-900 text-center">
                    404 Not Found
                </h1>
                <h2 class="font-medium text-slate-700">
                    Oops! The page you're looking for doesn't exist.
                </h2>
            </div>

            <div class="flex flex-col gap-3">
                <Button variant="emerald" @click="goBack">
                    Previous Link
                </Button>
                <Button variant="outline">
                    <RouterLink to="/"> Go Back Home </RouterLink>
                </Button>
            </div>
        </Card>
    </main>
</template>
