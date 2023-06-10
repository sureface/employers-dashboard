import {App} from "vue";
import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Layout from "../layout/Default.vue"

const isAuthorized = localStorage.hasOwnProperty('token');

const  authGuard = function (to, form, next) {
    if (!isAuthorized) next({name: 'Login'})
    else next()
}

const managerAuthGuard = function (to, form, next) {
    if (!isAuthorized) next({name: 'Login'})
    if (localStorage.getItem('userRole') !== 'Not User') next({ name: 'Home' })
    else next()
}


export const constantRouterMap: ({ redirect: string; path: string; component: any; children: { path: string; component: () => Promise<{ readonly default?: { name: string } }>; meta: {}; name: string }[]; name: string } | { redirect: string; path: string; component: () => Promise<{ readonly default?: { name: string } }>; name: string })[] = [
    {
        path: '/',
        component: Layout,
        name: 'Root',
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'Main',
                component: () => import('../components/Main.vue'),
                meta: []
            },
        ],
        requiresAuth: true,
        beforeEnter: authGuard
    },
    {
        path: '/login',
        component: () => import('../views/LoginView.vue'),
        name: 'Login',
        redirect: '/login',
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    strict: true,
    routes: constantRouterMap as RouteRecordRaw[],
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = (app: App<Element>) => {
    app.use(router)
}