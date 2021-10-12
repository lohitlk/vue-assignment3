import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home/Home.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/getUserById/:id',
        name: 'getUserById',
        component: ()=>import(/*webpackChunkName="Details"*/"@/components/home/getUserById.vue")
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;