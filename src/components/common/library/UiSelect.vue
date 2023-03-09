<template>
  <div class="content">
    <ui-label
      v-if="label"
      class="label"
      :label="label"
      :disabled="disabled"
      :required="required"
    />
      <div
        v-click-outside="closeSelect"
        class="select"
        :class="{ active: expanded }"
      >
        <div class="input__content">
          <input
            :value="selected ?? ''"
            :placeholder="placeholder"
            :disabled="disabled"
            type="text"
            class="input"
            readonly
            :style="selectStyles"
            @click="toggleSelect"
          >
          <span class="icon icon-down-open-big"></span>
        </div>
        <transition>
          <div
            v-if="expanded"
            :style="{ top: `${height + 2}px` }"
            class="options"
          >
            <div
              v-for="option in modelValue"
              :key="option.key"
              class="option"
              v-text="option.value"
              @click="select(option.key, option.value)"
            />
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
import UiLabel from '@/components/common/library/UiLabel'

export default {
  name: 'UiSelect',
  components: { UiLabel },
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      default: 60
    },
    required: {
      type: Boolean,
      default: false
    },
    selectedValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      expanded: false,
      selected: this.selectedValue
    }
  },
  computed: {
    selectStyles () {
      return {
        height: `${this.height}px`
      }
    }
  },
  methods: {
    toggleSelect () {
      this.expanded = !this.expanded
    },
    select (key, value) {
      this.selected = value
      this.expanded = false

      this.$emit('option-selected', key)
    },
    closeSelect () {
      this.expanded = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";

  .content {
    width: 100%;
    color: var(--light-text-color);
  }

  .select {
    position: relative;
    display: grid;
    cursor: pointer;

    &.active {
      .input {
        border-color: var(--dark-text-color);
        border-radius: 10px 10px 0 0;
      }
      .options {
        border-color: var(--dark-text-color);
        border-radius: 0 0 10px 10px;
        border-top-color: transparent;
        max-height: 200px;
        overflow-y: scroll;
      }

      .icon {
        transform: translate(0, -50%) rotate(180deg);
      }
    }
  }

  .input__content {
    position: relative;
    display: grid;

    .icon {
      position: absolute;
      font-size: 24px;
      top: 50%;
      transform: translate(0, -50%);
      right: 20px;
      transition: transform .2s ease-in-out;
    }
  }

  .input {
    border: 1px solid var(--border-color);
    background-color: var(--secondary-background-color);
    color: var(--light-text-color);
    border-radius: 10px;
    padding: 0 45px 0 20px;
    transition: all .3s ease-in-out, border-radius .1s;
    cursor: pointer;

    @include hoverActiveFocus {
      border-color: var(--dark-text-color);
    }
  }

  .options {
    position: absolute;
    overflow: hidden;
    z-index: 999;
    left: 0;
    width: calc(100% - 2px);
    border: 1px solid var(--border-color);
    background-color: var(--secondary-background-color);
    border-radius: 10px;
  }

  .option {
    transition: background-color .3s ease-in-out;
    padding: 10px 20px;

    &:hover,
    &.selected {
      background-color: var(--secondary-background-color-hover);
    }
  }

  /* we will explain what these classes do next! */
  .v-enter-active {
    transition: opacity .5s ease;
  }
  .v-leave-active {

  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>