<script setup lang="ts">
import {
    LayoutDashboard,
    BookOpen,
    CheckSquare,
    Activity,
    BarChart2,
} from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";
import Logo from "@/assets/devlevel-logo.png";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar";
import AppSidebarFooter from "./AppSidebarFooter.vue";
import Separator from "./ui/separator/Separator.vue";

const route = useRoute();

const isActive = (url: string) => {
    if (url === "/dashboard") return route.path === "/dashboard";
    return route.path === url || route.path.startsWith(url + "/");
};

const items = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Skills", url: "/dashboard/skills", icon: BookOpen },
    { title: "Tasks", url: "/dashboard/tasks", icon: CheckSquare },
    { title: "Habits", url: "/dashboard/habits", icon: Activity },
    { title: "Analytics", url: "/dashboard/analytics", icon: BarChart2 },
];
</script>

<template>
    <Sidebar side="left" collapsible="icon">
        <SidebarHeader>
            <div
                class="flex items-center gap-3 px-2 py-2 overflow-hidden group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center"
            >
                <img
                    :src="Logo"
                    alt="DevLevel logo"
                    class="w-8 h-8 object-contain shrink-0"
                />
                <span
                    class="text-lg font-semibold group-data-[collapsible=icon]:hidden truncate"
                >
                    DevLevel
                </span>
            </div>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem
                            v-for="item in items"
                            :key="item.title"
                        >
                            <SidebarMenuButton
                                as-child
                                :is-active="isActive(item.url)"
                                class="py-5"
                                :class="
                                    isActive(item.url)
                                        ? 'bg-emerald-100! text-emerald-600! font-semibold border-r-2 border-emerald-500 hover:bg-emerald-100! hover:text-emerald-600!'
                                        : 'hover:bg-emerald-100'
                                "
                            >
                                <RouterLink
                                    :to="item.url"
                                    class="flex items-center gap-3"
                                >
                                    <component
                                        :is="item.icon"
                                        class="w-4 h-4 shrink-0"
                                    />
                                    <span
                                        class="group-data-[collapsible=icon]:hidden truncate"
                                    >
                                        {{ item.title }}
                                    </span>
                                </RouterLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <Separator />

        <AppSidebarFooter />
    </Sidebar>
</template>
