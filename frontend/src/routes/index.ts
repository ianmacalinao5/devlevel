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
        meta: { layout: "AuthLayout", title: "Login" },
    },
    {
        path: "/signup",
        component: Signup,
        meta: { layout: "AuthLayout", title: "Signup" },
    },

    {
        path: "/dashboard",
        component: Dashboard,
        meta: { layout: "SidebarLayout", title: "Dashboard" },
    },
    {
        path: "/users",
        component: Users,
        meta: { layout: "SidebarLayout", title: "Users" },
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

router.afterEach((to) => {
    document.title = to.meta.title?.concat(" - DevLevel") || "DevLevel";
});
