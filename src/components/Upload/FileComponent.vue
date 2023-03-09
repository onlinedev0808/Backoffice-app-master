<template>
  <div class="file">
    <span class="file__icon icon-file"></span>
    <span
      class="file__name"
      v-text="name"
    />
    <div class="file__progress">
        <span
          class="finished"
          :style="{ width: `${uploadPercentages}%` }"
        />
    </div>
    <div class="file__percent">
        <span
          class="current"
          v-text="uploadStatus"
        />
    </div>
    <span
      :class="icon"
      @click="remove"
    />
  </div>
</template>

<script>
export default {
  name: 'FileComponent',
  props: {
    name: {
      type: String,
      required: true
    },
    uploadPercentages: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    uploadFinished () {
      return this.uploadPercentages === 100
    },
    uploadStatus () {
      return this.uploadFinished ? 'Finished' : `${this.uploadPercentages} / 100%`
    },
    icon () {
      return this.uploadFinished ? 'icon-ok' : 'icon-close'
    }
  },
  methods: {
    remove () {
      if (this.uploadFinished) return

      this.$emit('remove', this.index)
    }
  }
}
</script>

<style scoped lang="scss">
  .file {
    border: 1px solid var(--border-color);
    background-color: var(--secondary-background-color);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    user-select: none;

    &__icon {
      margin-right: 20px;
      font-size: 20px;
    }

    &__name {
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 20px;
    }

    &__progress {
      position: relative;
      flex: 1;
      background-color: var(--secondary-background-color-hover);
      height: 16px;
      border-radius: 100px;
      overflow: hidden;

      .finished {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background-color: var(--blue-color);
        border-radius: 100px;
      }
    }

    &__percent {
      margin-right: 15px;
      margin-left: 15px;

      .current {
        display: flex;
        width: 65px;
        justify-content: flex-end;
        margin-right: 5px;
      }
    }

    .icon-close {
      color: var(--black-color);
      font-size: 14px;
      cursor: pointer;
    }

    .icon-ok {
      color: var(--green-color);
      font-size: 14px;
    }
  }
</style>