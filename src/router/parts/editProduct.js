import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const EditProductPage = () => import('@/pages/EditProduct.vue')

export default () => {
  return {
    component: EditProductPage,
    meta: {
      title: 'Edit Product',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [...roles.all]
    },
    path: '/editProduct',
    name: 'editProduct',
    props: true
  }
}
