<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";

const authStore = useAuthStore();
const router = useRouter();

async function logout() {
    await authStore.logout();
    router.push("/");
    toast.success("Log Out Successful!");
}
</script>

<template>
    <div class="min-h-screen flex bg-muted/30">
        <!-- Sidebar -->
        <aside class="w-64 border-r bg-background p-6 flex flex-col gap-6">
            <h2 class="text-lg font-semibold">Dashboard</h2>

            <nav class="flex flex-col gap-2">
                <RouterLink to="/dashboard">
                    <Button variant="ghost" class="w-full justify-start">
                        Dashboard
                    </Button>
                </RouterLink>

                <RouterLink to="/users">
                    <Button variant="ghost" class="w-full justify-start">
                        Users
                    </Button>
                </RouterLink>

                <RouterLink to="/settings">
                    <Button variant="ghost" class="w-full justify-start">
                        Settings
                    </Button>
                </RouterLink>
            </nav>
        </aside>

        <!-- Content -->
        <div class="flex-1 flex flex-col">
            <!-- Topbar -->
            <header
                class="border-b bg-background px-6 py-4 flex justify-between items-center"
            >
                <span class="text-sm text-muted-foreground">
                    Welcome back {{ authStore.user?.name ?? "User" }}
                    {{ authStore.user?.email ?? "User" }}
                </span>

                <Button variant="destructive" size="sm" @click="logout">
                    Logout
                </Button>
            </header>

            <!-- Page -->
            <main class="p-6 flex-1">
                <RouterView />
            </main>
        </div>
    </div>
</template>
