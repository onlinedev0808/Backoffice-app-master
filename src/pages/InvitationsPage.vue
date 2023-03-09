<template>
  <div class="items__inner">
    <div class="items__title">
      <ui-title text="Invitations"/>
    </div>
    <inviting-table :invitations="getInvitations"/>
  </div>
</template>

<script>
import InvitingTable from '@/components/Invite/InvitingTable'
import { mapGetters } from 'vuex'
import UiTitle from '@/components/common/library/UiTitle'
export default {
  name: 'InvitationsPage',
  components: { UiTitle, InvitingTable },
  inject: ['$toast'],
  mounted () {
    this.$store.dispatch('invitations')
      .catch(e => {
        this.$toast.error(e)
      })
  },
  computed: {
    ...mapGetters(['getInvitations'])
  }
}
</script>

<style scoped>

</style>