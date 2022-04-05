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
},
{
    path: '/gallery',
    name: 'gallery',
    component: () =>
        import( /* webpackChunkName: "gallery" */ '../views/Gallery.vue')
}
]

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
})

export default router