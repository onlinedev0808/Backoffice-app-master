import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const InvitePage = () => import('@/pages/InvitePage.vue')

export default () => {
  return {
    component: InvitePage,
    meta: {
      title: 'Send invitation',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.SUPER_ADMIN, roles.ADMIN, roles.AGENT]
    },
    path: '/inviting',
    name: 'inviting',
    props: true
  }
}
