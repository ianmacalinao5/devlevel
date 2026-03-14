<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const authStore = useAuthStore();
</script>

<template>
    <SidebarProvider>
        <div class="flex min-h-screen w-full bg-muted/30">
            <AppSidebar />

            <div class="flex flex-1 flex-col">
                <header
                    class="border-b bg-background px-2 md:px-6 py-3 flex justify-between items-center"
                >
                    <SidebarTrigger />

                    <span class="text-sm text-muted-foreground">
                        <template v-if="authStore.user">
                            Welcome back {{ authStore.user.name }}
                        </template>

                        <template v-else>
                            <Skeleton class="w-20 h-4" />
                        </template>
                    </span>
                </header>

                <main class="flex-1 p-6">
                    <RouterView />
                </main>
            </div>
        </div>
    </SidebarProvider>
</template>
