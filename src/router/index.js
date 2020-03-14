import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/Layout/Index/Index'
import Login from '@/Layout/Login/Login'
import DashBoard from '@/view/DashBoard/DashBoard'
import EventAnalysis from '@/view/EventAnalysis/EventAnalysis'
import ConverAnalysis from '@/view/ConverAnalysis/ConverAnalysis'
import ChartPage from '@/view/ChartPage/ChartPage'
import ChartComp from '@/view/ChartPage/ChartComp/ChartComp'

import route from '@/view/route'

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
        component: () => import('@/view/DragVue/DragVue')
      },
      {
        path: '/chart',
        name: 'chart',
        component: ChartPage,
        children: [
          {
            path: '/chart/:id',
            name: 'chartcomp',
            component: ChartComp
          }
        ]
      },
      ...route
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
