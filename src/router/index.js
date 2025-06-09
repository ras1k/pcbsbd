
import { createRouter, createWebHistory } from "vue-router";

import index from "../pages/index.vue";
import AboutSection from "../pages/AboutSection.vue";
import FeaturedBuilds from "../pages/FeaturedBuilds.vue";
import WhyChooseUs from "../pages/WhyChooseUs.vue";
import ContactCTA from "../pages/ContactCTA.vue";
import OurTeam from "../pages/OurTeam.vue";
import Blogs from "../pages/Blogs.vue";

const routes=[
    

    {
        path:'/',
        name:'home',
        component: index,
    },
    {
        path:'/about',
        name:'about',
        component: AboutSection,
    },
    {
        path:'/builds',
        name:'builds',
        component: FeaturedBuilds,
    },
    {
        path:'/whyUs',
        name:'whyUs',
        component: WhyChooseUs,
    },
    {
        path:'/contact',
        name:'contact',
        component: ContactCTA,
    },
    {
        path:'/team',
        name:'team',
        component: OurTeam,
    },
    {
        path:'/blogs',
        name:'blogs',
        component: Blogs,
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
