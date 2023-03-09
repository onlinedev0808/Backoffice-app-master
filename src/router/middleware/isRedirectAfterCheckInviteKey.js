const isRedirectAfterCheckInviteKey = ({ next, from }) => {

  if (!from.name) return next({ name: 'error' })

  return next()
}

export default isRedirectAfterCheckInviteKey