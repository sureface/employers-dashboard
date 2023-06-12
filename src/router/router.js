import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/user.js'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/sign-up',
        name: 'signup',
        component: () => import('../components/modals/Sign-up.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../layout/Default.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    if (to.path === '/dashboard' && !userStore.isAuthenticated && !localStorage.getItem('TOKEN')) {
        next('/')
    } else {
        next()
    }
})

export const setupRouter = (app) => {
    app.use(router)
}