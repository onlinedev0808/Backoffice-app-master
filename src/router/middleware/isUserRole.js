const isUserRole = ({ to, next, store }) => {
  const authorizedUserRole = store.getters.getUserRole

  return to.meta.roles.includes(authorizedUserRole.name) ? next() : location.href = '/login'
}

export default isUserRole
