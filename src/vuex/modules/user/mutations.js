export default {
  UPDATE_AUTH_USER (state, status) {
    state.authorized = status
  },
  UPDATE_PROFILE_USER (state, status) {
    state.profile = status
  },
  UPDATE_ROLE_USER (state, status) {
    state.role = status
  },
  UPDATE_INVITE_KEY (state, status) {
    state.key = status
  },
  UPDATE_INVITATIONS (state, status) {
    state.invitations = status
  },
  UPDATE_USERS (state, status) {
    state.users = status
  },
  UPDATE_USER (state, status) {
    state.user = status
  },
  REMOVE_ONE_USER (state, status) {
    state.users = status
  },
  RESTORE_ONE_USER (state, status) {
    state.users = status
  }
}
