import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const UsersPage = () => import('@/pages/UsersPage.vue')

export default () => {
  return {
    component: UsersPage,
    meta: {
      title: 'Users',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.SUPER_ADMIN]
    },
    path: '/users',
    name: 'users',
    props: true
  }
}
