import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./route.js";
import axios from "axios";
import store from "./store/index.js";
import './assets/base.css';
import './assets/script.js';

createApp(App).use(store).use(router).mount("#app");
