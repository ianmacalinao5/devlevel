<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const authStore = useAuthStore();
const router = useRouter();

async function logout() {
    await authStore.logout();
    router.push("/");
    toast.success("Log Out Successful!");
}
</script>

<template>
    <SidebarProvider>
        <div class="flex min-h-screen w-full bg-muted/30">
            <!-- Sidebar -->
            <AppSidebar />

            <!-- Content Area -->
            <div class="flex flex-1 flex-col">
                <!-- Header -->
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

                    <Button variant="destructive" size="sm" @click="logout">
                        Logout
                    </Button>
                </header>

                <!-- Main Content -->
                <main class="flex-1 p-6">
                    <RouterView />
                </main>
            </div>
        </div>
    </SidebarProvider>
</template>
