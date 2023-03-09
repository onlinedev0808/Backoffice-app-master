<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <div class="logo">
        <img :src="logo" alt="logo">
      </div>
      <div class="user">
        <ui-title
          class="user__name"
          :text="getUserName"
        />
        <div
          class="user__role"
          v-text="$options.roles.visibility[getUserRole.name]"
        />
      </div>
    </div>
    <div class="sidebar__upload">
      <ui-button
        v-if="getUserRole.name === $options.roles.CREATOR"
        icon="icon-plus"
        text="upload"
        :active="$route.path === '/upload'"
        text-uppercase
        @clicked="openPage('/upload')"
      />
      <ui-button
        v-if="getUserRole.name === $options.roles.INTERIOR_DESIGNER"
        icon="icon-plus"
        text="create"
        :active="$route.path === '/createPreview'"
        text-uppercase
        @clicked="openPage('/createPreview')"
      />
    </div>
    <div class="sidebar__items">
      <sidebar-category
        v-for="(items, category) in sidebarItemsMeta()"
        :key="category"
        :title="category"
        :items="items"
      />
      <a class="logout" @click="logout">
        <div class="logout__icon">
          <span class="icon-logout" />
        </div>
        <div class="logout__title" v-text="'Log out'"/>
      </a>
    </div>
  </div>
</template>

<script>
import sidebarItems from '@/utils/meta/sidebarItemsMeta'
import SidebarCategory from '@/components/Sidebar/SidebarCategory'
import UiButton from '@/components/common/library/UiButton'
import UiTitle from '@/components/common/library/UiTitle'
import { mapGetters } from 'vuex'
import { removeLSItem } from '@/utils/helpers/helpers'
import roles from '@/globals/roles'

export default {
  name: 'SidebarComponent',
  components: { UiTitle, UiButton, SidebarCategory },
  roles,
  props: {
    logo: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getUserName', 'getUserRole'])
  },
  methods: {
    logout () {
      removeLSItem('token')
      removeLSItem('user')

      this.$router.replace('/login')
    },
    openPage (path) {
      this.$router.replace(path)
    },
    sidebarItemsMeta () {
      return sidebarItems(this.getUserRole.name)
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  background-color: var(--secondary-background-color);
  padding: 60px;

  &__logo {
    display: grid;
    grid-template-columns: 80px 80%;
    grid-gap: 16px;
    margin-bottom: 60px;

    .logo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }

    .user {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 10px;

      &__name {
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  &__upload {
    max-width: 120px;
    margin-bottom: 65px;
  }

  .logout {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 20px;
    align-items: center;
    width: max-content;
    cursor: pointer;
    color: var(--red-color);

    &__icon {
      font-size: 18px;
    }
  }

  .category__wrapper:nth-child(1) {
    margin-bottom: 60px;
  }
  .category__wrapper:nth-child(2) {
    margin-bottom: 40px;
  }
}
</style>