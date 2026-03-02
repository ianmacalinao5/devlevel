<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import { useRouter } from "vue-router";
import { BarChart3, ListTodo, LineChart } from "lucide-vue-next";
import Logo from "@/assets/devlevel-logo.png";

const router = useRouter();

const features = [
    {
        title: "Skill Tracking",
        description: "Measure growth and see your improvement timeline.",
        icon: BarChart3,
    },
    {
        title: "Task System",
        description: "Build consistency with structured daily goals.",
        icon: ListTodo,
    },
    {
        title: "Progress Analytics",
        description: "Visual dashboards that show your development journey.",
        icon: LineChart,
    },
];

const goToDashboard = () => router.push("/dashboard");
const goToAbout = () => router.push("/about");
</script>
<template>
    <main class="min-h-screen text-gray-900">
        <section
            class="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center"
        >
            <div class="md:col-span-3 text-center md:text-left">
                <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
                    Welcome to <span class="text-emerald-600">DevLevel</span>
                </h1>

                <p class="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                    Track your progress, manage your tasks, and level up your
                    developer skills every day.
                </p>

                <div
                    class="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
                >
                    <Button
                        @click="goToDashboard"
                        variant="emerald"
                        size="lg"
                        class="rounded-full"
                    >
                        Get Started
                    </Button>

                    <Button
                        @click="goToAbout"
                        variant="outline"
                        size="lg"
                        class="rounded-full"
                    >
                        Learn More
                    </Button>
                </div>
            </div>

            <div class="md:col-span-2 flex justify-center md:justify-end">
                <img
                    :src="Logo"
                    alt="DevLevel Logo"
                    class="w-64 md:w-full max-w-sm object-contain"
                />
            </div>
        </section>

        <FeaturesSection :features="features" />
    </main>
</template>
