<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";

const layouts = { AuthLayout, SidebarLayout, HeaderLayout };

const route = useRoute();
const currentLayout = computed(
    () => layouts[route.meta.layout as keyof typeof layouts] ?? HeaderLayout,
);
</script>

<template>
    <component :is="currentLayout">
        <RouterView />
    </component>
</template>
