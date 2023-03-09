const InviteKeyError = () => import('@/pages/InviteKeyError.vue')

export default () => {
  return {
    component: InviteKeyError,
    meta: {
      title: 'Invite error',
      layout: 'AuthorizationLayout'
    },
    path: '/error',
    name: 'error',
    props: true
  }
}
