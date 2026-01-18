
import { createRouter, createWebHistory } from "vue-router";

import index from "../pages/index.vue";
import AboutSection from "../pages/AboutSection.vue";
import FeaturedBuilds from "../pages/FeaturedBuilds.vue";
import WhyChooseUs from "../pages/WhyChooseUs.vue";
import ContactCTA from "../pages/ContactCTA.vue";
import OurTeam from "../pages/OurTeam.vue";
import Blogs from "../pages/Blogs.vue";
import ReceiptGenerator from '/src/pages/ReceiptGenerator.vue'
import TermsAndCondition from '/src/pages/TermsAndCondition.vue'
import Reviews from '/src/pages/Reviews.vue'

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
    {
        path:'/generate-receipt',
        name:'generate-receipt',
        component: ReceiptGenerator,
    },
    {
        path:'/terms-and-conditions',
        name:'terms-and-conditions',
        component: TermsAndCondition,
    },
    {
        path:'/reviews',
        name:'reviews',
        component: Reviews,
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
