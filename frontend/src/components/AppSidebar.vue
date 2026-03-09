<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";
import Logo from "@/assets/devlevel-logo.png";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const route = useRoute();

const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "/dashboard/inbox",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "/dashboard/search",
        icon: Search,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
];
</script>

<template>
    <Sidebar side="left" collapsible="icon">
        <SidebarContent>
            <div class="flex items-center gap-3 px-4 py-3">
                <img
                    :src="Logo"
                    alt="DevLevel logo"
                    class="w-8 h-8 object-contain"
                />
                <span class="text-lg font-semibold">DevLevel</span>
            </div>

            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem
                            v-for="item in items"
                            :key="item.title"
                        >
                            <SidebarMenuButton
                                as-child
                                :is-active="route.path === item.url"
                            >
                                <RouterLink
                                    :to="item.url"
                                    class="flex items-center gap-3"
                                >
                                    <component
                                        :is="item.icon"
                                        class="w-4 h-4"
                                    />
                                    <span>{{ item.title }}</span>
                                </RouterLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>
