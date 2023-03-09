<template>
  <button
    class="button"
    :class="classes"
    :style="styles"
    :disabled="disabled"
    @click="click"
  >
    <div
      v-if="!loading"
      class="content"
    >
      <span
        v-if="icon"
        class="icon"
        :class="icon"
      />
      <span
        v-if="text"
        class="text"
        v-text="text"
      />
    </div>
    <ui-loader
      v-else
      size="20px"
      :color="buttonType === 'secondary' ? 'var(--blue-color)' : '#fff'"
    />
  </button>
</template>

<script>
import UiLoader from '@/components/common/library/UiLoader'
export default {
  name: 'UiButton',
  components: { UiLoader },
  emits: ['clicked'],
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    buttonType: {
      type: String,
      default: 'primary'
    },
    textUppercase: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '48px'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        [this.buttonType]: true,
        transparent: this.transparent,
        active: this.active
      }
    },
    styles () {
      return {
        rounded: this.rounded,
        textTransform: this.textUppercase ? 'uppercase' : 'none',
        height: this.height,
        fontSize: this.fontSize
      }
    }
  },
  methods: {
    click (e) {
      this.$emit('clicked', e)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";

  .button {
    max-width: 100%;
    width: 100%;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: .2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .3s ease-in-out;
    color: var(--white-color);
    padding: 16px 20px;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.active {
      cursor: default;
    }

    .icon {
      margin-right: 13px;
    }

    &.rounded {
      border-radius: 30px;
    }
    &:disabled {
      cursor: default;
      background-color: var(--light-text-color);
    }

    // colors
    @include buttonColorByClass('primary', rgb(var(--blue-color-1)), rgba(var(--blue-color-1), .9));
    @include buttonColorByClass('secondary', rgb(var(--light-blue-color-1)), rgba(var(--light-blue-color-1), .9));

    &.secondary {
      border: 1px solid var(--blue-color);
      color: var(--blue-color);

      &:disabled {
        cursor: default;
        opacity: .5;
      }
    }

    &.transparent {
      background-color: var(--white-color) !important;
    }
  }
</style>