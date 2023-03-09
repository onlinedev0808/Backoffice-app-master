export default {
  getUserIsAuthorized: state => state.authorized,
  getUserName: state => `${state.profile.first_name} ${state.profile.last_name}`,
  getUserFirstName: state => state.profile.first_name,
  getUserLastName: state => state.profile.last_name,
  getUserCountry: state => state.profile.country,
  getUserPhone: state => state.profile.phone,
  getUserId: state => state.profile.id,
  getUserFoundFrom: state => state.profile.found_from,
  getUserRole: state => state.role ?? {},
  getInvKey: state => state.key,
  getInvitations: state => state.invitations,
  getUsers: state => state.users,
  getUser: state => state.user
}