import ActionCheck from './ActionCheck/ActionCheck'
import User from './User/User'

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
  }
]
export default route
