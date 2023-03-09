import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const MockupsPage = () => import('@/pages/MockupsPage.vue')

export default () => {
  return {
    component: MockupsPage,
    meta: {
      title: 'Mockups',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.SUPER_ADMIN]
    },
    path: '/mockups',
    name: 'mockups',
    props: true
  }
}
