<template>
  <div class="category__wrapper">
    <div
      class="category__title"
      v-text="capitalizedTitle"
    />
    <div class="category__items">
      <sidebar-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :route="item.route"
        :className="item.key"
      />
    </div>
  </div>
</template>

<script setup>
import SidebarItem from '@/components/Sidebar/SidebarItem'
import { computed, defineProps } from 'vue'
import { capitalize } from '@/utils/helpers/helpers'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const capitalizedTitle = computed(() => capitalize(props.title))

</script>

<style scoped>
  .category__title {
    font-weight: 500;
    color: var(--dark-text-color);
    margin-bottom: 30px;
  }

  .category__items {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 40px;
  }
</style>