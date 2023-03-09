<template>
  <div class="block">
    <div
      class="title"
      v-text="title"
    />
    <div
      class="counter"
      v-text="counter"
    />
    <span
      v-if="icon"
      class="icon icon-arrow_right"
      @click="$emit('clicked', value)"
    />
  </div>
</template>

<script>
export default {
  name: 'StatisticBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    counter: {
      type: [String, Number],
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .block {
    position: relative;
    max-height: 180px;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    color: var(--dark-text-color);
    background-color: var(--secondary-background-color);
    padding: 30px;
  }

  .title {
    margin-bottom: 30px;
  }

  .counter {
    font-size: 64px;
    font-weight: 600;
  }

  .icon {
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 16px;
    color: var(--blue-color);
    cursor: pointer;
  }
</style>