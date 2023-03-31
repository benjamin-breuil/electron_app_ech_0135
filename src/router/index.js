import { createRouter, createWebHistory } from "vue-router";
import data_ech0135 from "../components/data_ech0135.vue";
import HelloWorld from "../components/HelloWorld.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: HelloWorld,
    },
    {
        path: '/csv',
        component:data_ech0135,
    }]
})

export default router