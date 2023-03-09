<template>
  <td
    :style="rowStyles"
    v-text="textValue"
    class="td"
    height="64"
  />
</template>

<script>
import roles from '@/globals/roles'
import { dateMonthYear } from '@/utils/helpers/helpers'
import inviteStatus from '@/utils/meta/inviteStatus'

export default {
  name: 'InvitingRow',
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    textValue () {
      switch (this.type) {
        case 'invited_user_email':
          return this.value
        case 'role':
          return roles.visibility[this.value]
        case 'status':
          return inviteStatus[this.value].value
        case 'created_at':
          return dateMonthYear(this.value)
        default:
          return ''
      }
    },
    rowStyles () {
      return this.type === 'status' ? {
        backgroundColor: inviteStatus[this.value].background,
        color: inviteStatus[this.value].color
      } : {}
    }
  }
}
</script>

<style scoped>
  .td {
    border: 1px solid var(--table-border-color);
    padding-left: 24px;
    color: var(--dark-text-color);
  }
</style>