import axios from "axios";
import store from "./store";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.state.token}`;
    return config;
});

export default axiosClient;
