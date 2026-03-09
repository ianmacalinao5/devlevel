<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Logo from "@/assets/devlevel-logo.png";
</script>

<template>
    <section
        class="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center"
    >
        <div class="md:col-span-3 text-center md:text-left">
            <h1
                class="scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 text-balance"
            >
                Welcome to <span class="text-emerald-600">DevLevel</span>
            </h1>

            <p class="mt-4 text-xl text-slate-500 max-w-xl mx-auto md:mx-0">
                Track your progress, manage your tasks, and level up your
                developer skills every day.
            </p>

            <div
                class="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            >
                <RouterLink to="/signup">
                    <Button variant="emerald" size="lg" class="rounded-full">
                        Get Started
                    </Button>
                </RouterLink>

                <RouterLink to="/about">
                    <Button
                        variant="outline"
                        size="lg"
                        class="rounded-full text-slate-800"
                    >
                        Learn More
                    </Button>
                </RouterLink>
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
</template>
