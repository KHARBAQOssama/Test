import { createRouter , createWebHistory } from "vue-router";
import Home from '../src/views/Home.vue';
import Dashboard from '../src/views/Dashboard.vue';

const routes = [
    {
        path:'/',
        component: Home,
        name:'home',
    },
    {
        path:'/admin',
        component: Dashboard,
        name:'dashboard',
    },
];
const router = createRouter ({
    history:createWebHistory(), 
    routes,
});

export default router