import roles from '@/globals/roles'

const inviteRolesMeta = [
  {
    value: 'Admin',
    key: 'admin',
    roles: [roles.SUPER_ADMIN]
  },
  {
    value: 'Agent',
    key: 'agent',
    roles: [roles.SUPER_ADMIN, roles.ADMIN]
  },
  {
    value: 'Creator',
    key: 'creator',
    roles: [roles.SUPER_ADMIN, roles.ADMIN, roles.AGENT]
  },
  {
    value: 'Art director',
    key: 'art_director',
    roles: [roles.SUPER_ADMIN, roles.ADMIN, roles.AGENT]
  },
  {
    value: 'Interior designer',
    key: 'interior_designer',
    roles: [roles.SUPER_ADMIN, roles.ADMIN, roles.AGENT]
  }
]

export default role => {
  return inviteRolesMeta.filter(m => m.roles.includes(role))
}