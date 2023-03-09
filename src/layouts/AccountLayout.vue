<template>
  <div class="wrapper">
    <sidebar-component
      :logo="$options.logo"
      role="Super Admin"
      name="John Doe"
    />
    <router-view />
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar/SidebarComponent'
// TODO hardcode sidebar-component props
import logo from '../assets/images/logo.jpg'

export default {
  name: 'AccountLayout',
  logo,
  components: {
    SidebarComponent
  }
}
</script>

<style scoped>

</style>