<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import Skeleton from "./components/Skeleton.vue";
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";
import { useAuthStore } from "./stores/useAuthStore";

const layouts = { AuthLayout, SidebarLayout, HeaderLayout };
const authStore = useAuthStore();
const route = useRoute();

const currentLayout = computed(() => {
    const layoutName = route.meta.layout as keyof typeof layouts;
    return layoutName ? layouts[layoutName] : null;
});
</script>

<template>
    <template v-if="authStore.isReady">
        <component v-if="currentLayout" :is="currentLayout">
            <RouterView />
        </component>
        <RouterView v-else />
    </template>

    <template v-else>
        <Skeleton />
    </template>

    <Toaster position="top-right" :closeButton="true" richColors />
</template>
>
