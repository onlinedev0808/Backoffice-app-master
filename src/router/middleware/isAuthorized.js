const isLogged = ({ to, next, store }) => {
  const isAuthorized = store.getters.getUserIsAuthorized

  if ((to.name === 'login' || to.name === 'registration') && isAuthorized === true) return next()

  return store.dispatch('updateAuthorizeStatus')
    .then(() => {
      next()
    })
    .catch(() => {
      store.commit('UPDATE_AUTH_USER', false)
      return next({ name: 'login' })
    })
}

export default isLogged