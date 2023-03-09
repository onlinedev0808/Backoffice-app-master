<template>
  <Component :is="layout" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { bodyLock, getLSItem } from '@/utils/helpers/helpers'

const AccountLayout = defineAsyncComponent(() => import('@/layouts/AccountLayout.vue'))
const AuthorizationLayout = defineAsyncComponent(() => import('@/layouts/AuthorizationLayout.vue'))

export default {
  name: 'App',
  components: {
    AccountLayout,
    AuthorizationLayout
  },
  mounted() {
    this.updateUserFromLS()
    bodyLock(false)
  },
  computed: {
    layout() {
      return this.$route.meta?.layout || 'AuthorizationLayout'
    }
  },
  methods: {
    updateUserFromLS() {
      const userLS = getLSItem('user')

      if (!userLS) return

      const user = JSON.parse(userLS)

      this.$store.dispatch('updateProfileUser', user)
    }
  }
}
</script>
