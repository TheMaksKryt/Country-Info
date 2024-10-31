import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import Country from '@/pages/SelectedCountry.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/coutries',
        children: [
            {
                path: '/coutries',
                name: 'Countries',
                component: Home
            },
            {
                path: '/country/:country',
                name: 'Country',
                component: Country
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/coutries'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
