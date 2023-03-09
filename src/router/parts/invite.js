const InviteKeyCheck = () => import('@/pages/InviteKeyCheck')

export default () => {
  return {
    component: InviteKeyCheck,
    meta: {
      title: 'Dashboard',
      layout: 'AuthorizationLayout'
    },
    path: '/invite',
    name: 'invite',
    props: true
  }
}