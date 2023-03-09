<template>
  <page-content>
    <div class="invite">
      <div class="invite__controls">
        <div class="invite__input">
          <ui-input
            v-model="email"
            placeholder="Email of the recipient"
          />
        </div>
        <div class="invite__input">
          <ui-select
            v-model="rolesTabs"
            @option-selected="this.selectedRole = $event"
            placeholder="Choose role"
          />
        </div>
      </div>
      <div class="send-btn">
        <ui-button
          class="invite_button"
          text="Send an invitation"
          height="60px"
          font-size="16px"
          @clicked="send"
        />
      </div>
    </div>
    <div class="items">
      <div class="items__title">
        <ui-title text="Invitations"/>
        <additional-button text="All"/>
      </div>
      <div class="items__inner">
        <inviting-table :invitations="getInvitations"/>
      </div>
    </div>
  </page-content>
</template>

<script>
import PageContent from '@/components/common/PageContent'
import UiInput from '@/components/common/library/UiInput'
import inviteRolesMeta from '@/utils/meta/inviteRolesMeta'
import UiButton from '@/components/common/library/UiButton'
import UiSelect from '@/components/common/library/UiSelect'
import { mapGetters } from 'vuex'
import { notyText } from '@/globals/toastNotyText'
import UiTitle from '@/components/common/library/UiTitle'
import AdditionalButton from '@/components/common/AdditionalButton'
import InvitingTable from '@/components/Invite/InvitingTable'

export default {
  name: 'InvitePage',
  components: { InvitingTable, AdditionalButton, UiTitle, UiSelect, UiInput, UiButton, PageContent },
  inject: ['$toast'],
  data () {
    return {
      rolesTabs: [],
      selectedRole: '',
      email: ''
    }
  },
  mounted () {
    this.rolesTabs = inviteRolesMeta(this.getUserRole.name)

    const [firstTab] = this.rolesTabs

    this.selectedRole = firstTab.key

    this.$store.dispatch('invitations')
      .catch(e => {
        this.$toast.error(e)
      })
  },
  computed: {
    ...mapGetters(['getUserRole', 'getInvitations'])
  },
  methods: {
    send () {
      const data = {
        email: this.email,
        user_type: this.selectedRole
      }

      if (data.email) {
        this.$store.dispatch('inviteUser', data)
          .then(data => {
            if (data.error) {
              this.$toast.error(data.error)
              return
            }

            const [firstTab] = this.rolesTabs

            this.email = ''
            this.activeTab = firstTab.key
            this.$toast.success(notyText.INVITE_RESOLVE)
            this.$router.push('/invitations')
          })
          .catch(e => {
            console.log(e)
            this.$toast.error(e?.response?.data?.error ? notyText.INVITE_REJECT : e)
          })
      }
    }
  },
  clicked () {
    this.$router.push('/invitations')
  }
}
</script>

<style scoped lang="scss">
  .invite {
    margin-bottom: 100px;

    &__controls {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 5%;
      margin-bottom: 30px;
    }
  }
  .items {
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }
  }
  .invite_button {
    width: 65%;
  }
</style>