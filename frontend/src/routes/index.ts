import {
    createWebHistory,
    createRouter,
    type RouteRecordRaw,
} from "vue-router";

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Users from "@/views/dashboard/Users.vue";
import Home from "@/views/public/Home.vue";
import About from "@/views/public/About.vue";
import NotFound from "@/views/errors/NotFound.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home, meta: { layout: "HeaderLayout" } },
    { path: "/about", component: About, meta: { layout: "HeaderLayout" } },

    { path: "/login", component: Login, meta: { layout: "AuthLayout" } },
    { path: "/register", component: Register, meta: { layout: "AuthLayout" } },

    {
        path: "/dashboard",
        component: Dashboard,
        meta: { layout: "SidebarLayout" },
    },
    { path: "/users", component: Users, meta: { layout: "SidebarLayout" } },

    { path: "/:pathMatch(.*)*", component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
