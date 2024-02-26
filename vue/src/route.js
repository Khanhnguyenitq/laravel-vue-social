import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "./components/layouts/AppLayout.vue";
import store from "./store";
import Login from "./views/auth/Login.vue";
import Register from "./views/auth/Register.vue";
// import HomeView from "./views/auth/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "app",
            component: AppLayout,
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
        next({ name: "app" });
    } else {
        next();
    }
});

export default router;
