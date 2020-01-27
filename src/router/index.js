import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../view/Index/Index'
import Login from '../view/Login/Login'

Vue.use(VueRouter)
const routes = [
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
     path: '/',
     redirect: 'index'
    }
]


const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
  })

export default router