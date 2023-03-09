import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const ProductsPage = () => import('@/pages/ProductsPage.vue')

export default () => {
  return {
    component: ProductsPage,
    meta: {
      title: 'Products',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.SUPER_ADMIN]
    },
    path: '/products',
    name: 'products',
    props: true
  }
}
