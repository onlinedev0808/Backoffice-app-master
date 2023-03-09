const SignupInvitationPage = () => import('@/pages/SignupInvitationPage.vue')

export default () => {
  return {
    component: SignupInvitationPage,
    meta: {
      title: 'Signup invitation',
      layout: 'AuthorizationLayout'
    },
    path: '/signup',
    name: 'signup',
    props: true
  }
}
