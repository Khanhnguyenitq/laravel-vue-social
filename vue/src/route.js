import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomeView.vue";
import Login from "./views/auth/Login.vue";

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
    ],
});

export default router;
