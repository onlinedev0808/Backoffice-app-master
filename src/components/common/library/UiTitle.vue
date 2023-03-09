<template>
  <div
    class="title"
    :style="{ fontSize }"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'UiTitle',
  props: {
    fontSize: {
      type: String,
      default: '24px'
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .title {
    font-weight: 600;
    color: var(--dark-text-color);
  }
</style>