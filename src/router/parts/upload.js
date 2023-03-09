import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const UploadPage = () => import('@/pages/UploadPage.vue')

export default () => {
  return {
    component: UploadPage,
    meta: {
      title: 'Upload files',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.CREATOR]
    },
    path: '/upload',
    name: 'upload',
    props: true
  }
}
