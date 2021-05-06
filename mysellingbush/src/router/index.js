import Vue from 'vue';
import VueRouter from 'vue-router';
import AppCategoryView from '@/components/AppCategoryView';
import AppSubCategoryView from '@/components/AppSubCategoryView';
import AppProduitView from '@/components/AppProduitView';
import AppLoginView from '@/components/AppLoginView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'category',
        component: AppCategoryView
    },
    {
        path: '/subcategory/:id',
        name: 'subcategory',
        props: true,
        component: AppSubCategoryView
    },
    {
        path: '/product/:id',
        name: 'product',
        props: true,
        component: AppProduitView
    },
    {
        path: '/login',
        name: 'login',
        props: true,
        component: AppLoginView
    }
]

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL
})

export default router;