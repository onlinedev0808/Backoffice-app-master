<template>
  <span
    class="loader"
    :style="styles"
  />
</template>

<script>
export default {
  name: 'UiLoader',
  props: {
    size: {
      type: String,
      default: '20px'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    styles () {
      return {
        borderTopColor: this.color,
        borderLeftColor: this.color,
        borderRightColor:this. color,
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>

<style scoped>
  .loader {
    border: 3px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>