import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const MarketplacesPage = () => import('@/pages/MarketplacesPage.vue')

export default () => {
  return {
    component: MarketplacesPage,
    meta: {
      title: 'Marketplaces',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.SUPER_ADMIN]
    },
    path: '/marketplaces',
    name: 'marketplaces',
    props: true
  }
}
