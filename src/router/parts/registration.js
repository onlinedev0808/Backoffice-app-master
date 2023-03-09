import isRedirectAfterCheckInviteKey from '@/router/middleware/isRedirectAfterCheckInviteKey'

const RegistrationPage = () => import('@/pages/RegistrationPage.vue')

export default () => {
  return {
    component: RegistrationPage,
    meta: {
      title: 'Dashboard',
      layout: 'AuthorizationLayout',
      middleware: [isRedirectAfterCheckInviteKey]
    },
    path: '/registration',
    name: 'registration',
    props: true
  }
}