import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const ReviewPage = () => import('@/pages/ReviewPage.vue')

export default () => {
  return {
    component: ReviewPage,
    meta: {
      title: 'Review Artworks',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.ART_DIRECTOR]
    },
    path: '/review',
    name: 'review',
    props: true
  }
}
