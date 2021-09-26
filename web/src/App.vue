<template>
<div class="h-full dark:bg-black-500 dark:text-gray-100">
    <component :is="layout">
        <router-view></router-view>
    </component>
</div>
</template>

<script>
import DashboardLayout from "./layout/DashboardLayout/DashboardLayout.vue";

import DashboardSide from "./layout/DashboardLayout/DashboardSide.vue";
export default {
    name: "app",
    data() {
        return {};
    },
    computed: {
        layout() {
            return this.$router.currentRoute.value.meta.layout || "default-layout";
        },
    },
    components: {
        DashboardSide,
        DashboardLayout,
    },
    mounted() {
        let htmlElem = document.querySelector("html");
        let isLight = JSON.parse(localStorage.getItem('vwmode-islight'))
        console.log('-------isLight-------------')
        console.log(isLight)
        console.log('--------------------')
        htmlElem.classList[isLight ? "remove" : "add"]("dark");
    },
};
</script>

<style>
</style>
