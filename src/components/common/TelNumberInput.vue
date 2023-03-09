<template>
  <div
    class="tel-input-wrapper"
    :style="wrapperStyles"
  >
    <ui-label :label="label" />
    <vue-tel-input
      :value="modelValue"
      @input="onInput($event.target.value)"
      @country-changed="countryChanged"
    />
  </div>
</template>

<script>
import UiLabel from '@/components/common/library/UiLabel'

export default {
  name: 'TelNumberInput',
  components: { UiLabel },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 60
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      country: {}
    }
  },
  computed: {
    wrapperStyles () {
      return {
        gridTemplateRows: `auto ${this.height}px`
      }
    }
  },
  methods: {
    countryChanged (country) {
      this.country = country

      this.$emit('country-changed', country)
    },
    onInput (value, v2, v3, v4) {
      console.log(value, v2, v3, v4)
      // console.log(this.country)
      // this.$emit('update:model-value', value)
    }
  }
}
</script>

<style scoped lang="scss">
  .tel-input-wrapper {
    display: grid;
    color: var(--dark-text-color);
  }
</style>