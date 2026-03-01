import { createWebHistory, createRouter } from "vue-router";

import AuthLayout from "@/layouts/AuthLayout.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

import Dashboard from "@/views/dashboard/Dashboard.vue";
import Users from "@/views/dashboard/Users.vue";

import Home from "@/views/public/Home.vue";
import About from "@/views/public/About.vue";

import NotFound from "@/views/errors/NotFound.vue";

const routes = [
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            { path: "login", component: Login },
            { path: "register", component: Register },
        ],
    },

    {
        path: "/user",
        component: SidebarLayout,
        children: [
            { path: "dashboard", component: Dashboard },
            { path: "users", component: Users },
        ],
    },

    {
        path: "/",
        component: HeaderLayout,
        children: [
            { path: "", component: Home },
            { path: "about", component: About },
        ],
    },

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
