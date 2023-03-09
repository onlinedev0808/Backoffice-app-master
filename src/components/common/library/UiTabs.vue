<template>
  <div class="content">
    <ui-label class="label" :label="label" />
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        class="tab"
        :class="{ active: tab.key === activeTab }"
        tabindex="0"
        v-text="tab.title"
        @click="$emit('click-tab', tab.key)"
      />
    </div>
  </div>
</template>

<script>
import UiLabel from '@/components/common/library/UiLabel'

export default {
  name: 'UiTabs',
  components: { UiLabel },
  emits: ['click-tab'],
  props: {
    activeTab: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .tab {
    padding: 19px;
    transition: all .3s ease-in-out;
    background-color: var(--secondary-background-color);
    border: 1px solid var(--border-color);
    border-radius: 30px;
    cursor: pointer;

    &.active,
    &:hover,
    &:focus {
      background-color: var(--light-blue-color);
      border-color: var(--blue-color);
      color: var(--blue-color);
    }
  }
</style>