<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";

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

        <div class="flex-1 flex flex-col">
            <header
                class="border-b bg-background px-6 py-4 flex justify-between items-center"
            >
                <span class="text-sm text-muted-foreground">
                    <template v-if="authStore.user">
                        Welcome back {{ authStore.user.name }}
                    </template>

                    <template v-else> <Skeleton class="w-20 h-4" /> </template>
                </span>
                <Button variant="destructive" size="sm" @click="logout">
                    Logout
                </Button>
            </header>

            <main class="p-6 flex-1">
                <RouterView />
            </main>
        </div>
    </div>
</template>
