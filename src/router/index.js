import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'home',
    component: () =>
        import( /* webpackChunkName: "home" */ '../views/Home.vue')
},
{
    path: '/menu',
    name: 'menu',
    component: () =>
        import( /* webpackChunkName: "menu" */ '../views/Menu.vue')
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router