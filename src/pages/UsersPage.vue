<template>
  <div class="items__inner">
    <div class="items__title">
      <ui-title text="All Users"/>
    </div>
    <manage-users-table :users="getUsers"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UiTitle from '@/components/common/library/UiTitle'
import ManageUsersTable from '@/components/ManageTables/ManageUsersTable'
export default {
  name: 'UsersPage',
  components: { ManageUsersTable, UiTitle },
  inject: ['$toast'],
  mounted () {
    this.$store.dispatch('users')
      .catch(e => {
        this.$toast.error(e)
      })
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>

<style scoped>

</style>