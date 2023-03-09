import user from './modules/user'
import products from './modules/products'
import { createLogger, createStore } from 'vuex'

const modules = {
  user,
  products
}

const plugins = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default createStore({
  modules,
  plugins
})
