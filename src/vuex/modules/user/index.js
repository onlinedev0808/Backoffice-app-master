import actions from './actions'
import defaultState from './state'
import getters from './getters'
import mutations from './mutations'

export default {
  actions,
  getters,
  mutations,
  state: defaultState()
}
