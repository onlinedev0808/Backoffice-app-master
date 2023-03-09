import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const CreatePreview = () => import('@/pages/CreatePreview.vue')

export default () => {
  return {
    component: CreatePreview,
    meta: {
      title: 'Create previews',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.INTERIOR_DESIGNER]
    },
    path: '/createPreview',
    name: 'createPreview',
    props: true
  }
}
