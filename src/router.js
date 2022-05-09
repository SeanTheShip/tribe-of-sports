import { createWebHistory, createRouter } from "vue-router";
import mainpage from './pages/mainpage.vue';
import login from './pages/Signin.vue';
import sign from './pages/Signup.vue';
import registration from './pages/registration.vue';

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
        path: "/signup/checked",
        component: sign,
    },
    {
        path: "/signup/registration",
        component: registration,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 