import {createRouter, createWebHistory } from 'vue-router';
import ProjectDetail from './pages/projects/ProjectDetail.vue';
import ProjectsList from './pages/projects/ProjectsList.vue';
import ContactMe from './pages/contact/ContactMe.vue';
import AboutMe from './pages/about/AboutMe.vue';
import NotFound from './pages/NotFound.vue';
import CreateProject from './pages/projects/CreateProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/projects'},
        {path: '/projects', component: ProjectsList
            //todo: to understand if the create route should be a child of projects
            //it shouldn't be necessary or right in that case
            //, children: [ {path: 'create', component: null } ]
        },
        {path: '/projects/:id', component: ProjectDetail},

        {path: '/projects/create', component: CreateProject},
        {path: '/contact', component: ContactMe},
        {path: '/about', component: AboutMe},
        {path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;