<template>
  <router-link
    class="item"
    :to="route"
    :class="className"
  >
    <div class="item__icon">
      <span :class="icon"></span>
    </div>
    <div
      class="item__title"
      v-text="title"
    />
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  route: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
  .item {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 20px;
    align-items: center;
    width: max-content;
    cursor: pointer;
    transition: color .3s ease-in-out;

    &__icon {
      font-size: 18px;
    }

    &:hover,
    &.router-link-active,
    &:focus {
      color: var(--blue-color);
    }
  }
</style>