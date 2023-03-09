import isAuthorized from '@/router/middleware/isAuthorized'
import roles from '@/globals/roles'
import isUserRole from '@/router/middleware/isUserRole'

const ArtworksPage = () => import('@/pages/ArtworksPage.vue')

export default () => {
  return {
    component: ArtworksPage,
    meta: {
      title: 'Artworks',
      layout: 'AccountLayout',
      middleware: [isUserRole, isAuthorized],
      roles: [roles.CREATOR, roles.ART_DIRECTOR]
    },
    path: '/artworks',
    name: 'artworks',
    props: true
  }
}
