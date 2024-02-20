import { createStore } from "vuex";
import axiosClient from "../axios.js";

const store = createStore({
    state: {
        user: null,
        token: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        },
        LOGOUT(state) {
            state.user = null;
            state.token = null;
        },
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axiosClient.post("/login", credentials);
                const { user, token } = response.data;
                commit("SET_USER", user);
                commit("SET_TOKEN", token);
            } catch (error) {
                console.error("Lỗi đăng nhập:", error);
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