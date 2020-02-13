import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../view/Index/Index'
import Login from '../view/Login/Login'
import DashBoard from '@/components/DashBoard/DashBoard'
import EventAnalysis from '@/components/EventAnalysis/EventAnalysis'
import ConverAnalysis from '@/components/ConverAnalysis/ConverAnalysis'

Vue.use(VueRouter)
const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard
      },
      {
        path: '/eventanalysis',
        name: 'eventanalysis',
        component: EventAnalysis
      },
      {
        path: '/converanalysis',
        name: 'converanalysis',
        component: ConverAnalysis
      },
      {
        path: '/dragvue',
        name: 'dragvue',
        component: () => import('@/components/DragVue/DragVue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: 'dashboard'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router
