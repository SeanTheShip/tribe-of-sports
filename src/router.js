import { createWebHistory, createRouter } from "vue-router";
import mainpage from './pages/mainpage.vue';
import login from './pages/Signin.vue';
import sign from './pages/Signup.vue';

const routes = [
    {
        path: "/",
        component: mainpage,
    },
    {
        path: "/signin",
        component: login,
    },
    {
        path: "/signup",
        component: sign,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 