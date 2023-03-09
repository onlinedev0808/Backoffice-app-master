import axios from 'axios'
import { getLSItem } from '@/utils/helpers/helpers'

const BASE_URL = 'https://api.bo.sypo.online/api'
// const BASE_URL = 'https://34.22.18.62:443/api'
const ax = {
  get instance () {
    return axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${getLSItem('token')}` }
    })
  }
}
// const instance = () => axios.create({
//   baseURL: BASE_URL,
//   headers: { Authorization: `Bearer ${getLSItem('token')}` }
// })

const cF = (config, method, path) => {
  return new Promise((resolve, reject) => {
    try {
      const req = ax.instance[method](path, config)

      resolve(req)
    } catch (e) {
      reject(e)
    }
  })
}

export {
  axios,
  cF,
  BASE_URL,
  ax
}