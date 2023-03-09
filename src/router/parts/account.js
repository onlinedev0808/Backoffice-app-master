import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const AccountPage = () => import('@/pages/AccountPage.vue')

export default () => {
  return {
    component: AccountPage,
    meta: {
      title: 'Manage Account',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [...roles.all]
    },
    path: '/account',
    name: 'account',
    props: true
  }
}
