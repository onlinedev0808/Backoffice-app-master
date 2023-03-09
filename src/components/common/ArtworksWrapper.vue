<template>
  <page-content>
    <template #title="{ title }">
      <div class="title-wrapper">
        <ui-title :text="title" />
        <slot name="headerBtn"></slot>
      </div>
      <div class="items">
        <slot name="items"></slot>
      </div>
    </template>
  </page-content>
</template>

<script>
import UiTitle from '@/components/common/library/UiTitle'
import PageContent from '@/components/common/PageContent'

export default {
  name: 'ArtworksWrapper',
  components: { PageContent, UiTitle }
}
</script>

<style scoped>
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 65px;
  }

  .items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>