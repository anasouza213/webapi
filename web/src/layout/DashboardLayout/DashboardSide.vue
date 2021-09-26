<template>
<div class="h-full w-full bg-gray-200 dark:bg-black-700 text-black-700 dark:text-black-100">
    <h1 class="text-4xl font-bold text-purple-900 bg-gray-300 dark:bg-black-700 h-16 flex items-center justify-center">
        <router-link to="/">AGENDA</router-link>
    </h1>

    <div class="p-2">
        <vue3-router-tree :items="routes">
            <template #item="{ item }">
                <div class="flex space-x-3 items-center">
                    <component :is="item.name.replace(' ', '')" />
                    <router-link exact-active-class="text-purple-700" :to="item.path"><span class="text-md font-light"> {{ item.name }}</span></router-link>
                </div>
            </template>
        </vue3-router-tree>
    </div>
</div>
</template>

<script>
import {
    defineComponent
} from "vue";

import Vue3RouterTree from "vue3-router-tree";
import IconDashboard from "../../components/icons/IconDashboard";
import IconUserProfile from "../../components/icons/IconUserProfile";

export default defineComponent({
    data: () => ({
        routes: [{
                path: "/",
                name: "Dashboard",
                hasIcon: true,

                info: "updated",
            },
             {
                path: "/dashboard/contatos/index",
                name: "Contatos",
                hasIcon: true,

                children: [{
                        path: "/dashboard/contatos/index",
                        name: "Listar Contatos",
                    },
                   
                ],
            },
        
         
        ],
    }),
    computed: {},
    methods: {},
    components: {
        Vue3RouterTree,
        Dashboard: IconDashboard,
        Contatos: IconUserProfile,
    },
    mounted() {
        console.log("--------------------");
        console.log(this.$router.getRoutes());
        console.log("--------------------");
    },
});
</script>

<style>
</style>
