<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SidebarFooter } from "@/components/ui/sidebar";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>

<template>
    <SidebarFooter>
        <RouterLink
            to="/dashboard/profile"
            class="flex items-center gap-3 px-2 py-3 rounded-md overflow-hidden group-data-[collapsible=icon]:justify-center"
        >
            <Avatar class="w-8 h-8 shrink-0">
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
            </Avatar>
            <div
                class="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden"
            >
                <span class="text-sm font-semibold truncate">{{
                    user?.name
                }}</span>
                <span class="text-xs text-muted-foreground truncate">{{
                    user?.email
                }}</span>
            </div>
        </RouterLink>
    </SidebarFooter>
</template>
