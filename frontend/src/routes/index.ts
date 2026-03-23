import {
    createWebHistory,
    createRouter,
    type RouteRecordRaw,
} from "vue-router";

import Login from "@/views/auth/Login.vue";
import Signup from "@/views/auth/Signup.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Profile from "@/views/profile/ProfileSettings.vue";
import Skills from "@/views/dashboard/Skills.vue";
import Tasks from "@/views/dashboard/Tasks.vue";
import Analytics from "@/views/dashboard/Analytics.vue";
import Habits from "@/views/dashboard/Habits.vue";
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
        path: "/forgot-password",
        component: ForgotPassword,
        meta: {
            layout: "AuthLayout",
            title: "Forgot Password",
            guestOnly: true,
        },
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
        path: "/dashboard/skills",
        component: Skills,
        meta: {
            layout: "SidebarLayout",
            title: "Skills",
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/tasks",
        component: Tasks,
        meta: {
            layout: "SidebarLayout",
            title: "Tasks",
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/habits",
        component: Habits,
        meta: {
            layout: "SidebarLayout",
            title: "Habits",
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/analytics",
        component: Analytics,
        meta: {
            layout: "SidebarLayout",
            title: "Analytics",
            requiresAuth: true,
        },
    },
    {
        path: "/profile-settings",
        component: Profile,
        meta: {
            layout: "SidebarLayout",
            title: "Profile Settings",
            requiresAuth: true,
        },
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
