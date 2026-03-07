import {
    createWebHistory,
    createRouter,
    type RouteRecordRaw,
} from "vue-router";

import Login from "@/views/auth/Login.vue";
import Signup from "@/views/auth/Signup.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Users from "@/views/dashboard/Users.vue";
import Home from "@/views/public/Home.vue";
import About from "@/views/public/About.vue";
import { useAuthStore } from "@/stores/useAuthStore";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home,
        meta: { layout: "HeaderLayout", title: "Home" },
    },
    {
        path: "/about",
        component: About,
        meta: { layout: "HeaderLayout", title: "About" },
    },
    {
        path: "/login",
        component: Login,
        meta: { layout: "AuthLayout", title: "Login", guestOnly: true },
    },
    {
        path: "/signup",
        component: Signup,
        meta: { layout: "AuthLayout", title: "Signup", guestOnly: true },
    },
    {
        path: "/dashboard",
        component: Dashboard,
        meta: {
            layout: "SidebarLayout",
            title: "Dashboard",
            requiresAuth: true,
        },
    },
    {
        path: "/users",
        component: Users,
        meta: { layout: "SidebarLayout", title: "Users", requiresAuth: true },
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/errors/NotFound.vue"),
        meta: { title: "404 Not Found" },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    const authStore = useAuthStore();

    if (!authStore.isReady) {
        await authStore.initialize();
    }

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return { path: "/login" };
    }

    if (to.meta.guestOnly && authStore.isAuthenticated) {
        return { path: "/dashboard" };
    }
});

router.afterEach((to) => {
    document.title = to.meta.title?.concat(" - DevLevel") || "DevLevel";
});
