<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";

const layouts = { AuthLayout, SidebarLayout, HeaderLayout };

const route = useRoute();
const currentLayout = computed(() => {
    const layoutName = route.meta.layout as keyof typeof layouts;
    return layoutName ? layouts[layoutName] : null;
});
</script>

<template>
    <component v-if="currentLayout" :is="currentLayout">
        <RouterView />
    </component>

    <RouterView v-else />

    <Toaster
        position="top-right"
        :closeButton="true"
        closeButtonPosition="top-right"
        richColors
    />
</template>
