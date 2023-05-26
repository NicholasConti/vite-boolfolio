import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import ShowProject from './pages/ShowProject.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/project',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/project/:slug',
            name: 'show',
            component: ShowProject
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router };
