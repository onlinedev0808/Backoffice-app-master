<template>
  <div class="items__inner">
    <div class="items__title">
      <ui-title text="Artworks"/>
    </div>
    <manage-artworks-table :artworks="getArtworks"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UiTitle from '@/components/common/library/UiTitle'
import ManageArtworksTable from '@/components/ManageTables/ManageArtworksTable.vue'
export default {
  name: 'ArtworksPage',
  components:  { ManageArtworksTable, UiTitle },
  inject: ['$toast'],
  props: {
  },
  computed: {
    ...mapGetters(['getArtworks'])
  }
}
</script>

<style scoped>

</style>