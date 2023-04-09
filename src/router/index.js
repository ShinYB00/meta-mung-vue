import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import Signup from '../pages/signup.vue';
import Login from '../pages/login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});

export default router;