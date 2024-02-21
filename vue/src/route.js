import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
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
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                requiresGuest: true,
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.token) {
        next({ name: "login" });
    } else if (to.meta.requiresGuest && store.state.token) {
        next({ name: "home" });
    } else {
        next();
    }
});

export default router;
