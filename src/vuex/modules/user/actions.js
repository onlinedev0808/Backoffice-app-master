import {
  checkAuth,
  login,
  invite,
  register,
  updateUserAccount,
  checkKey,
  getInvitations,
  getUsers,
  user,
  deleteUser
} from '@/api/requests'
import { bodyLock, getLSItem, setLSItem } from '@/utils/helpers/helpers'
import roles from '@/globals/roles'

export default {
  authLoginUser ({ dispatch }, user) {
    return new Promise((resolve, reject) => {
      bodyLock(true)
      login(user)
        .then(resp => {
          setLSItem('token', resp.data.access_token)

          return dispatch('updateProfileUser', resp.data.user)
            .then(() => resolve(resp))
            .catch(reject)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  updateAuthorizeStatus () {
    return new Promise((resolve, reject) => {

      checkAuth()
        .then(resp => {
          if (!resp.data.check) reject()

          resolve()
        })
        .catch(reject)
    })
  },
  updateProfileUser ({ commit }, user) {
    return new Promise(resolve => {
      commit('UPDATE_AUTH_USER', true)
      const profile = {
        id: user.id,
        phone: user.phone,
        country: user.country,
        found_from: user.found_from,
        first_name: user.first_name,
        last_name: user.last_name
      }

      const roleId = user?.role?.id || user.role_i || -1

      const role = {
        id: roleId,
        name: user?.role?.name || roles[roleId]
      }

      commit('UPDATE_PROFILE_USER', profile)
      commit('UPDATE_ROLE_USER', role)
      setLSItem('user', JSON.stringify({ ...profile, role: { ...role } }))
      resolve(user)
    })
  },
  inviteUser ({ dispatch }, user) {
    return new Promise((resolve, reject) => {
      bodyLock(true)
      invite(user)
        .then(data => {
          dispatch('invitations')
            .then(() => {
              resolve(data.data)
            })
            .catch(reject)
        })
        .catch(reject)
    })
  },
  invitations ({ commit }) {
    return new Promise((resolve, reject) => {
      bodyLock(true)
      getInvitations()
        .then(data => {
          commit('UPDATE_INVITATIONS', data.data)
          resolve()
        })
        .catch(e => {
          commit('UPDATE_INVITATIONS', [])
          console.error(e)
          reject(e)
        })
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  users ({ commit }) {
    return new Promise((resolve, reject) => {
      bodyLock(true)
      getUsers()
        .then(data => {
          commit('UPDATE_USERS', data.data)
          resolve()
        })
        .catch(e => {
          commit('UPDATE_USERS', [])
          console.error(e)
          reject(e)
        })
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  getUser ({ commit }, id) {
    return new Promise((resolve, reject) => {
      bodyLock(true)
      user(id)
        .then(data => {
          commit('UPDATE_USER', data.data)
          resolve()
        })
        .catch(e => {
          commit('UPDATE_USER', [])
          console.error(e)
          reject(e)
        })
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  deleteUser ({ commit }, id) {
    return new Promise((resolve, reject) => {
      deleteUser(id)
        .then(data => {
          commit('REMOVE_ONE_USER', id)
          resolve(data.data)
        })
        .catch(reject)
    })
  },
  registerUser ({ dispatch }, user) {
    return new Promise((resolve, reject) => {
      const key = getLSItem('key')

      bodyLock(true)
      register({ ...user, key })
        .then(resp => {
          dispatch('updateProfileUser', resp.data.user)
            .then(() => resolve(resp))
            .catch(reject)
            .finally(() => {
              bodyLock(false)
            })
        })
        .catch(reject)
    })
  },
  updateAccount ({ dispatch }, { id, payload }) {
    return new Promise((resolve, reject) => {
      updateUserAccount(id, payload)
        .then(resp => {
          dispatch('updateProfileUser', resp.data)
            .then(() => resolve(resp))
            .catch(reject)
            .finally(() => {
              bodyLock(false)
            })
        })
        .catch(reject)
    })
  },
  checkValidKey ({ commit }, key) {
    return new Promise((resolve, reject) => {

      checkKey(key)
        .then(() => {
          setLSItem('key', key)
          commit('UPDATE_INVITE_KEY', key)
          resolve()
        })
        .catch(reject)
    })
  }
}
