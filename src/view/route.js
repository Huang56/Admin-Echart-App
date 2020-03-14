import ActionCheck from './ActionCheck/ActionCheck'
import User from './User/User'
import Vuex from './Vuex/Vuex'
import CompTest from './CompTest/CompTest'

const route = [
  {
    path: '/action',
    name: 'action',
    component: ActionCheck
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: Vuex
  },
  {
    path: '/comptest',
    name: 'comptest',
    component: CompTest
  }
]
export default route
