import { axios, cF, BASE_URL, ax } from './main'

const login = data => {
  try {
    return axios.post(`${BASE_URL}/auth/login`, data)
  } catch (e) {
    console.error(e)
    return e
  }
}

const register = data => {
  try {
    return axios.post(`${BASE_URL}/auth/register`, data)
  } catch (e) {
    console.error(e)
    return e
  }
}

const checkKey = key => {
  try {
    return axios.post(`${BASE_URL}/checkKey`, { invite_key: key })
  } catch (e) {
    console.error(e)
    return e
  }
}

const uploadFiles = (formData, onUploadProgress) => {
  try {
    return ax.instance.post( '/products',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress
      }
    )
  } catch (e) {
    console.error(e)
    return e
  }
}

const deleteReviewProduct = id => cF({}, 'delete', `/products/${id}`)
const getReviewProducts = () => cF({}, 'get', '/products')
const getArtworks = () => cF({}, 'get', '/products/user/all')
const getProductPreviews = id => cF({}, 'get', `/previews/all/${id}`)
const checkAuth = () => cF({}, 'get', '/auth/check')
const invite = data => cF({ params: data }, 'get', '/invite')
const getInvitations = () => cF({}, 'get', '/invite/all')
const getUsers= () => cF({}, 'get', '/users/')
const user= id => cF({}, 'get', `/users/${id}`)
const deleteUser = id => cF({}, 'delete', `/users/${id}`)
const acceptReviewProduct = (id, status) => cF({ status }, 'post', `/products/action/${id}`)
const uploadReviewProduct = (id, formData) => cF(formData, 'post', `/products/preview/${id}`)
const updateUserAccount = (id, payload) => cF(payload, 'put', `/users/${id}`)

export {
  login,
  register,
  deleteReviewProduct,
  getReviewProducts,
  getProductPreviews,
  getArtworks,
  checkAuth,
  updateUserAccount,
  invite,
  getInvitations,
  getUsers,
  user,
  deleteUser,
  checkKey,
  acceptReviewProduct,
  uploadReviewProduct,
  uploadFiles
}