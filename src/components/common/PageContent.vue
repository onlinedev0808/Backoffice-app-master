<template>
  <div
    class="page__content"
  >
    <slot
      name="title"
      :title="title || $route.meta.title"
    >
      <ui-title
        class="page__content-title"
        :text="title || $route.meta.title"
      />
    </slot>
    <slot></slot>
  </div>
</template>

<script>
import UiTitle from '@/components/common/library/UiTitle'

export default {
  name: 'PageContent',
  components: { UiTitle },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>