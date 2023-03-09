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
          v-for="user in users.data"
          :key="`user-${user.id}`"
      >
        <td class="td">{{user.first_name}} {{user.last_name}}</td>
        <td class="td">{{user.email}}</td>
        <td class="td">{{user.role.name}}</td>
        <td class="td"></td>
        <td class="td" :style="user.status ==='active' ? { color: 'rgb(96, 201, 13)' } : { color:'#9c3d3a' }">
          {{user.status}}</td>
        <td class="td-center">
          <button class="restore_btn"
              v-if="user.status==='deactivated'"
                @click="restoreUser(user.id)">Restore</button>
          <button class="delete_btn"
              v-else
                @click="removeUser(user.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { getUsers } from '@/api/requests'
import axios from 'axios'
import { BASE_URL } from '@/api/main'
import { getLSItem } from '@/utils/helpers/helpers'

const tableHeader = {
  first_name: 'Username',
  email: 'Email',
  role: 'Role',
  invited_by: 'Invited by',
  status: 'Status',
  delete: 'Delete'
}

export default {
  name: 'ManageUsersTable',
  tableHeader,
  tableHeaderKeys: Object.keys(tableHeader),
  inject: ['$toast'],
  props: {
    users: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    this.$store.dispatch('users')
      .catch(e => {
        this.$toast.error(e)
      })
  },
  methods: {
    getUsers,
    removeUser (id) {
      this.$store.dispatch('deleteUser', id)
        .then(() => {
          location.reload()
        })
    },
    restoreUser (userId) {
      axios.post( `${BASE_URL}/users/restore`, { id: userId }, {
        headers: { Authorization: `Bearer ${getLSItem('token')}` }
      })
        .then(() => {
          location.reload()
        })
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

.td {
  height: 64px;
  border: 1px solid var(--table-border-color);
  padding-left: 24px;
  color: var(--dark-text-color);
}

.td-center {
  text-align: center;
  border: 1px solid var(--table-border-color);
}

.delete_btn, .restore_btn {
  border-radius: 4px;
  background-color: #9c3d3a;
  color: white;
  padding: 5px 5px;
  width: 65px;
}

.delete_btn {
  background-color: #9c3d3a;
}

.restore_btn {
  background-color: rgb(96, 201, 13);
}
</style>