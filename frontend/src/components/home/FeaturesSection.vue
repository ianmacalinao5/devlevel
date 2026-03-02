<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Feature = {
    title: string;
    description: string;
    icon: any;
};

defineProps<{
    features: Feature[];
}>();
</script>

<template>
    <section class="max-w-6xl mx-auto px-4 md:px-5">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
                v-for="feature in features"
                :key="feature.title"
                class="group relative overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
                <!-- animated outline sweep -->
                <span
                    class="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-emerald-400/40 before:to-transparent before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-700"
                />

                <CardHeader class="flex items-center gap-3">
                    <component
                        :is="feature.icon"
                        class="size-5 text-emerald-500"
                    />
                    <CardTitle>{{ feature.title }}</CardTitle>
                </CardHeader>

                <CardContent>
                    <p class="text-muted-foreground text-sm">
                        {{ feature.description }}
                    </p>
                </CardContent>
            </Card>
        </div>
    </section>
</template>
