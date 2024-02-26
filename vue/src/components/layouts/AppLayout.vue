<template>
    <div id="wrapper">
        <TopHeader />
        <Sidebar />
        <router-view></router-view>
    </div>
</template>

<script setup>
import store from "../../store/index.js";
import Sidebar from "./Sidebar.vue";
import TopHeader from "./TopHeader.vue";
import { onMounted } from "vue";

// const currentUser = computed(() => store.state.user);
onMounted(() => {
    store.dispatch("getUser");
});
</script>
