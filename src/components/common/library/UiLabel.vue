<template>
  <div
    class="label"
    :class="{ disabled }"
  >
    {{ label }}
    <span
      v-if="required"
      class="req_hint"
      v-text="'*'"
    />
  </div>
</template>

<script>
export default {
  name: 'UiLabel',
  props: {
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .label {
    margin-bottom: 20px;
    color: var(--dark-text-color);

    &.disabled {
      color: var(--light-text-color);
    }
  }

  .req_hint {
    color: var(--red-color);
  }
</style>