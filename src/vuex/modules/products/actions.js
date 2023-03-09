import {
  acceptReviewProduct,
  deleteReviewProduct, getProductPreviews,
  getReviewProducts, getArtworks,
  uploadReviewProduct
} from '@/api/requests'
import { bodyLock } from '@/utils/helpers/helpers'

export default {
  getProducts ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('REMOVE_PRODUCTS')
      bodyLock(true)
      getReviewProducts()
        .then(resp => {
          commit('UPDATE_PRODUCTS', resp.data)
          resolve()
        })
        .catch(reject)
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  getProductPreviews ({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit('REMOVE_PRODUCTS')
      bodyLock(true)
      getProductPreviews(id)
        .then(resp => {
          commit('UPDATE_PRODUCTS', resp.data)
          resolve()
        })
        .catch(reject)
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  removeProduct ({ commit }, id) {
    return new Promise((resolve, reject) => {
      deleteReviewProduct(id)
        .then(data => {
          commit('REMOVE_ONE_PRODUCT', id)
          resolve(data.data)
        })
        .catch(reject)
    })
  },
  artworks ({ commit }) {
    return new Promise((resolve, reject) => {
      bodyLock(true)
      getArtworks()
        .then(data => {
          commit('UPDATE_ARTWORKS', data.data)
          resolve()
        })
        .catch(e => {
          commit('UPDATE_ARTWORKS', [])
          console.error(e)
          reject(e)
        })
        .finally(() => {
          bodyLock(false)
        })
    })
  },
  acceptProduct ({ commit }, id) {
    return new Promise((resolve, reject) => {
      acceptReviewProduct(id, 'accepted')
        .then(data => {
          commit('ACCEPT_PRODUCT', { data: data.data, id })

          resolve()
        })
        .catch(reject)
    })
  },
  uploadPreview ({ commit }, { id, formData }) {
    return new Promise((resolve, reject) => {
      uploadReviewProduct(id, formData)
        .then(data => {
          commit('UPDATE_PRODUCT_PREVIEW_COUNTER', data.data.product_id)

          resolve()
        })
        .catch(reject)
    })
  }
}
