<template>
  <div
    class="error"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'UiError',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .error {
    color: var(--red-color);
    font-size: 14px;
  }
</style>