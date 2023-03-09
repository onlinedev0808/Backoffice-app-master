import account from '@/router/parts/account'
import dashboard from '@/router/parts/dashboard'
import invite from '@/router/parts/invite'
import inviting from '@/router/parts/inviting'
import invitations from '@/router/parts/invitations'
import marketplaces from '@/router/parts/marketplaces'
import mockups from '@/router/parts/mockups'
import products from '@/router/parts/products'
import statistics from '@/router/parts/statistics'
import upload from '@/router/parts/upload'
import users from '@/router/parts/users'
import login from '@/router/parts/login'
import registration from '@/router/parts/registration'
import error from '@/router/parts/error'
import review from '@/router/parts/review'
import createPreview from '@/router/parts/createPreview'
import productPreviews from '@/router/parts/productPreviews'
import artworks from '@/router/parts/artworks'
import signupInvitation from '@/router/parts/signupInvitation'
import thankYou from '@/router/parts/thankYou'
import editProduct from '@/router/parts/editProduct'

export default [
  account(),
  dashboard(),
  invite(),
  inviting(),
  invitations(),
  login(),
  signupInvitation(),
  thankYou(),
  marketplaces(),
  mockups(),
  products(),
  artworks(),
  statistics(),
  upload(),
  users(),
  registration(),
  error(),
  review(),
  createPreview(),
  productPreviews(),
  editProduct()
]
