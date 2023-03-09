const ThankYouPage = () => import('@/pages/ThankYouPage.vue')

export default () => {
  return {
    component: ThankYouPage,
    meta: {
      title: 'Thank You',
      layout: 'AuthorizationLayout'
    },
    path: '/success',
    name: 'success',
    props: true
  }
}
