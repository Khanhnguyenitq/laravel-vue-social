import { createStore } from "vuex";
import axiosClient from "../axios.js";

const store = createStore({
    state: {
        user: {},
        token: sessionStorage.getItem("TOKEN"),
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            if (token) {
                sessionStorage.setItem("TOKEN", token);
            } else {
                sessionStorage.removeItem("TOKEN");
            }
        },
        LOGOUT(state) {
            state.user = null;
            state.token = null;
            sessionStorage.removeItem("TOKEN");
        },
    },
    actions: {
        async register({ commit }, credentials) {
            try {
                const response = await axiosClient.post(
                    "/register",
                    credentials
                );
                const { user, token } = response.data;
                commit("SET_USER", user);
                commit("SET_TOKEN", token);
            } catch (error) {
                console.error("Registration failed:", error);
                throw error;
            }
        },

        async login({ commit }, credentials) {
            try {
                const response = await axiosClient.post("/login", credentials);
                const { user, access_token } = response.data;
                commit("SET_USER", user);
                commit("SET_TOKEN", access_token);
            } catch (error) {
                console.error("Lỗi đăng nhập:", error);
                throw error;
            }
        },

        async getUser({ commit }, dataUser) {
            try {
                const response = await axiosClient.get("/user", dataUser);
                const { data } = response.data;
                commit("SET_USER", data);
            } catch (error) {
                throw error;
            }
        },
        async logout({ commit }) {
            try {
                await axiosClient.post("/logout");
                commit("LOGOUT");
            } catch (error) {
                console.error("Lỗi đăng xuất:", error);
            }
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user,
    },
});

export default store;
