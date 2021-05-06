import Vue from 'vue';
import VueRouter from 'vue-router';
import AppCategoryView from '@/components/AppCategoryView';
import AppSubCategoryView from '@/components/AppSubCategoryView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'category',
        component: AppCategoryView
    },
    {
        path: '/subcategory',
        name: 'subcategory',
        component: AppSubCategoryView
    }
]

const router = new VueRouter({
    routes ,
    base: process.env.BASE_URL
})

export default router;