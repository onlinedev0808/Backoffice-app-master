import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const InvitationsPage = () => import('@/pages/InvitationsPage.vue')

export default () => {
  return {
    component: InvitationsPage,
    meta: {
      title: 'Invitations',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [...roles.all]
    },
    path: '/invitations',
    name: 'invitations',
    props: true
  }
}
