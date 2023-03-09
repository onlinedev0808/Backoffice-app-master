import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const DashboardPage = () => import('@/pages/DashboardPage.vue')

export default () => {
  return {
    component: DashboardPage,
    meta: {
      title: 'Dashboard',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [...roles.all]
    },
    path: '/',
    name: 'dashboard',
    props: true
  }
}