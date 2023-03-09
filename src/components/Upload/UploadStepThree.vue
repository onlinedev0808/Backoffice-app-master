<template>
  <div class="upload">
      <div
        class="title"
        v-text="`${filesLength} files uploaded successfully`"
      />
    <div class="buttons">
      <ui-button
        class="button"
        text="Done"
        button-type="secondary"
        height="60px"
        transparent
        @clicked="done"
      />
      <ui-button
        class="button"
        text="Upload more"
        button-type="secondary"
        height="60px"
        @clicked="upload"
      />
      <input
        ref="fileinput"
        type="file"
        multiple
        hidden
        @input="onFileInput"
      >
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/common/library/UiButton'
export default {
  name: 'UploadStepThree',
  components: { UiButton },
  emits: ['files-uploaded', 'done'],
  props: {
    filesLength: {
      type: Number,
      required: true
    }
  },
  methods: {
    done () {
      this.$router.push('/artworks')
    },
    upload () {
      this.$refs.fileinput.click()
    },
    onFileInput (e) {
      const { files } = e.target

      if (files.length) {
        this.$emit('files-uploaded', files)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .upload {
    display: grid;
    grid-template-rows: auto 60px;
    grid-gap: 55px;
    margin-top: 200px;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    color: var(--dark-text-color);
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 30px;

    .button {
      max-width: 170px;
    }
  }
</style>