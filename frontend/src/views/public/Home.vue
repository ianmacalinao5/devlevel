<script setup lang="ts">
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import { BarChart3, ListTodo, LineChart } from "lucide-vue-next";

const features = [
    {
        title: "Skill Tracking",
        description: "Measure growth and see your improvement timeline.",
        icon: BarChart3,
    },
    {
        title: "Task Management System",
        description: "Build consistency with structured daily goals.",
        icon: ListTodo,
    },
    {
        title: "Progress Analytics",
        description: "Visual dashboards that show your development journey.",
        icon: LineChart,
    },
];
</script>
<template>
    <main class="min-h-screen text-gray-900">
        <HeroSection />
        <FeaturesSection :features="features" />
    </main>
</template>
