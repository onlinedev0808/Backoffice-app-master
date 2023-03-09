import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const StatisticsPage = () => import('@/pages/StatisticsPage.vue')

export default () => {
  return {
    component: StatisticsPage,
    meta: {
      title: 'Statistics',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [...roles.all]
    },
    path: '/statistics',
    name: 'statistics',
    props: true
  }
}
