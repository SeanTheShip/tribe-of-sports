import { createWebHistory, createRouter } from "vue-router";
import mainpage from './pages/mainpage.vue';
import login from './pages/Signin.vue';
import sign from './pages/Signup.vue';
import nogym from './pages/nogym.vue';

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
    {
        path: "/register/nogym",
        component: nogym,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 