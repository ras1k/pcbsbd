
import { createRouter, createWebHistory } from "vue-router";

import index from "../pages/index.vue";

const routes=[
    

    {
        path:'/',
        name:'main',
        component: index,
    },
    
   
]
const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

export default router;
