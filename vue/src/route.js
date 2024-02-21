import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomeView.vue";
import Login from "./views/auth/Login.vue";
import Register from "./views/auth/Register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
    ],
});

export default router;
