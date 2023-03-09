const LoginPage = () => import('@/pages/LoginPage.vue')

export default () => {
  return {
    component: LoginPage,
    meta: {
      title: 'Login',
      layout: 'AuthorizationLayout'
    },
    path: '/login',
    name: 'login',
    props: true
  }
}
