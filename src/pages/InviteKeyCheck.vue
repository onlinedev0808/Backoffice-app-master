<template>
  <div />
</template>

<script>
import { getLSItem } from '@/utils/helpers/helpers'

export default {
  name: 'InviteKeyCheck',
  mounted () {
    const urlParams = new URLSearchParams(location.search)
    const key = urlParams.get('key')

    if (!key && !getLSItem('invite')) return this.$router.push({ name: 'error' })

    this.$store.dispatch('checkValidKey', key)
      .then(() => {
        this.$router.push({ name: 'registration' })
      })
      .catch(() => {
        this.$router.push({ name: 'error' })
      })
  }
}
</script>