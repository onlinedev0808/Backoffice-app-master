<template>
  <div
    class="content"
    :class="{ disabled }"
  >
    <label>
      <ui-label
        v-if="label"
        class="label"
        :label="label"
        :required="required"
        :disabled="disabled"
      />
      <div class="input__wrapper">
        <input
          :value="modelValue"
          :type="type"
          :placeholder="placeholderForInput"
          :disabled="disabled"
          :style="inputStyles"
          :required="required"
          class="input"
          @input="$emit('update:model-value', $event.target.value)"
          @keydown.enter="$emit('keydown-enter', $event.target.value)"
        >
        <span
          class="icon"
          :class="passwordIcon"
          @click="togglePasswordInputType"
        />
      </div>
    </label>
  </div>
</template>

<script>
import UiLabel from '@/components/common/library/UiLabel'
import { mapGetters } from 'vuex'
export default {
  name: 'UiInput',
  components: { UiLabel },
  emits: ['keydown-enter', 'update:model-value'],
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
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
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 60
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      type: this.inputType
    }
  },
  computed: {
    isPassword () {
      return this.inputType === 'password'
    },
    passwordIcon () {
      return this.isPassword ? this.type === 'password' ? 'icon-eye-off' : 'icon-eye' : ''
    },
    placeholderForInput () {
      return this.placeholder || this.label
    },
    inputStyles () {
      const INITIAL_PADDING = 20

      return {
        paddingRight: this.isPassword ? `${INITIAL_PADDING + 50}px` : `${INITIAL_PADDING}px`,
        height: `${this.height}px`
      }
    }
  },
  methods: {
    togglePasswordInputType () {
      if (this.disabled) return

      this.type = this.type === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";

  .content {
    width: 100%;

    &.disabled {
      .icon {
        cursor: default;
      }
    }
  }

  .input__wrapper {
    display: grid;
    position: relative;
  }

  .icon {
    position: absolute;
    font-size: 24px;
    cursor: pointer;
    top: 50%;
    transform: translate(0, -50%);
    right: 20px;
  }

  .input {
    border: 1px solid var(--border-color);
    background-color: var(--secondary-background-color);
    color: var(--light-text-color);
    border-radius: 10px;
    padding-left: 20px;
    transition: all .3s ease-in-out;

    @include hoverActiveFocus {
      border-color: var(--dark-text-color);
    }
  }
</style>