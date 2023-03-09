<template>
  <div class="form">
    <div class="error" v-text="error"/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormContent',
  props: {
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .error {
    margin-bottom: 10px;
    height: 15px;
    font-size: 14px;
    color: var(--red-color);
  }
</style>