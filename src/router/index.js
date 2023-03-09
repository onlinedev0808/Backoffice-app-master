import middlewarePipeline from './middleware/middlewarePipeline'
import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'
import Vuex from '@/vuex'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  if (!to.name) next({ name: 'dashboard' })

  document.title = `Backoffice${to?.meta?.title ? ` | ${to?.meta?.title}` : ''}`
  if (!to.meta.middleware) return next()

  const { middleware } = to.meta

  const context = { from, next, store: Vuex, to, router }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})
export default router
