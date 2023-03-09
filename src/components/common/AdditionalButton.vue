<template>
  <button
    class="sort"
    @click="onClick"
  >
    <span
      v-if="icon"
      class="icon-sort"
    />
    <span class="text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'AdditionalButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick () {
      this.$router.push('/invitations')
    }
  }
}
</script>

<style scoped>
  .sort {
    cursor: pointer;
    color: var(--blue-color);
    display: grid;
    grid-template-columns: 23px max-content;
    grid-gap: 10px;
    font-size: 14px;
    align-items: center;
  }

  .text {
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
  }
</style>