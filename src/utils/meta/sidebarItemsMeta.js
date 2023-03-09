import roles from '@/globals/roles'

const sidebarMeta = {
  menu: [
    {
      title: 'Dashboard',
      route: '/',
      key: 'dashboard',
      icon: 'icon-dashboard',
      roles: [...roles.all]
    },
    {
      title: 'Invite',
      key: 'invite',
      route: 'inviting',
      icon: 'icon-invite',
      roles: [roles.SUPER_ADMIN, roles.ADMIN, roles.AGENT]
    },
    {
      title: 'Manage users',
      key: 'users',
      route: 'users',
      icon: 'icon-users',
      roles: [roles.SUPER_ADMIN]
    },
    {
      title: 'Manage artworks',
      key: 'artworks',
      route: 'artworks',
      icon: 'icon-products',
      roles: [roles.CREATOR, roles.ART_DIRECTOR]
    },
    {
      title: 'Products',
      key: 'products',
      route: 'products',
      icon: 'icon-products',
      roles: [roles.SUPER_ADMIN]
    },
    {
      title: 'Statistics',
      key: 'statistics',
      route: 'statistics',
      icon: 'icon-statistics',
      roles: [...roles.all]
    },
    {
      title: 'Mockups',
      key: 'mockups',
      route: 'mockups',
      icon: 'icon-mockups',
      roles: [roles.SUPER_ADMIN]
    },
    {
      title: 'Marketplaces',
      key: 'marketplaces',
      route: 'marketplaces',
      icon: 'icon-marketplaces',
      roles: [roles.SUPER_ADMIN]
    },
    {
      title: 'Review',
      key: 'review',
      route: 'review',
      icon: 'icon-review',
      roles: [roles.ART_DIRECTOR]
    }
  ],
  more: [
    {
      title: 'Manage account',
      key: 'account',
      route: 'account',
      icon: 'icon-account',
      roles: [...roles.all]
    }
  ]
}

export default role => {
  return {
    menu: sidebarMeta.menu.filter(m => m.roles.includes(role)),
    more: sidebarMeta.more.filter(m => m.roles.includes(role))
  }
}