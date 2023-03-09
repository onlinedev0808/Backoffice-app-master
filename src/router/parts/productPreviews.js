import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const ReviewPage = () => import('@/pages/ReviewPage.vue')

export default () => {
  return {
    component: ReviewPage,
    meta: {
      title: 'Product previews',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.INTERIOR_DESIGNER]
    },
    path: '/previews/:id',
    name: 'productPreviews',
    props: true
  }
}
