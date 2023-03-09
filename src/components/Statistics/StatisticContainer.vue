<template>
  <div class="container">
    <div class="item top">
      <div
        class="title"
        v-text="top.title"
      />
      <div
        class="counter"
        v-text="top.counter"
      />
    </div>
    <div class="item bot">
      <div
        class="title"
        v-text="bot.title"
      />
      <div
        class="counter"
        v-text="bot.counter"
      />
    </div>
    <span
      class="icon icon-arrow_right"
      @click="$emit('clicked', value)"
    />
  </div>
</template>

<script>
export default {
  name: 'StatisticContainer',
  props: {
    top: {
      type: Object,
      required: true
    },
    bot: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    position: relative;
    background-color: var(--secondary-background-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;

    &::before {
      content: '';
      position: absolute;
      width: 100px;
      height: 1px;
      background-color: var(--border-color);
      top: 50%;
      left: 30px;
      transform: translate(0, -50%);
    }
  }

  .item {
    padding: 30px;

    .title {
      margin-bottom: 30px;
    }

    .counter {
      font-size: 64px;
      font-weight: 600;
    }

    &.bot {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translate(0, -50%);
    font-size: 16px;
    color: var(--blue-color);
    cursor: pointer;
  }
</style>