<template>
  <div class="table-wrapper">
    <table class="table">
      <thead class="thead">
        <tr>
          <th
            v-for="(th, index) in $options.tableHeaderKeys"
            :key="`th-${index}`"
            v-text="$options.tableHeader[th]"
            class="th"
          />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="invite in invitations"
          :key="`invite-${invite.id}`"
        >
          <inviting-row
            v-for="(td, index) in $options.tableHeaderKeys"
            :key="`td-${index}`"
            :type="td"
            :value="invite[td]"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import InvitingRow from '@/components/Invite/InvitingRow'

const tableHeader = {
  invited_user_email: 'Address',
  role: 'User type',
  created_at: 'Date',
  status: 'Status'
}

export default {
  name: 'InvitingTable',
  components: { InvitingRow },
  tableHeader,
  tableHeaderKeys: Object.keys(tableHeader),
  props: {
    invitations: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .table {
    border: 1px solid var(--table-border-color);
    border-collapse: collapse;
    width: 100%;
    background-color: var(--secondary-background-color);
  }

  .thead {
    height: 84px;
    color: var(--light-text-color);
  }

  .th {
    border: 1px solid var(--table-border-color);
    font-weight: 400;
  }
</style>