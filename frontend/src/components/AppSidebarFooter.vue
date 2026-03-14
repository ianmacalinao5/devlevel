<script setup lang="ts">
import { toast } from "vue-sonner";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SidebarFooter } from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-vue-next";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();
const router = useRouter();
const user = computed(() => authStore.user);

const handleLogout = async () => {
    await authStore.logout();
    router.push("/login");
    toast.success("Log Out Successful!");
};

const handleProfile = () => {
    router.push("/profile-settings");
};
</script>

<template>
    <SidebarFooter>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    class="flex items-center gap-3 px-2 py-3 rounded-md overflow-hidden group-data-[collapsible=icon]:justify-center hover:bg-accent cursor-pointer w-full"
                >
                    <Avatar class="w-8 h-8 shrink-0">
                        <AvatarImage
                            v-if="user?.avatar"
                            :src="user.avatar"
                            :alt="user.name"
                        />

                        <AvatarFallback
                            class="bg-emerald-600 text-white text-xs font-bold"
                        >
                            {{
                                user?.name
                                    ?.split(" ")
                                    .map((n) => n[0])
                                    .join("") ?? "U"
                            }}
                        </AvatarFallback>
                    </Avatar>
                    <div
                        class="flex items-start flex-col group-data-[collapsible=icon]:hidden overflow-hidden"
                    >
                        <span class="text-sm font-semibold truncate">{{
                            user?.name
                        }}</span>
                        <span class="text-xs text-muted-foreground truncate">{{
                            user?.email
                        }}</span>
                    </div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-48">
                <DropdownMenuItem @click="handleProfile" class="cursor-pointer">
                    <Settings class="w-4 h-4 mr-2" />
                    Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem @click="handleLogout" class="cursor-pointer">
                    <LogOut class="w-4 h-4 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </SidebarFooter>
</template>
