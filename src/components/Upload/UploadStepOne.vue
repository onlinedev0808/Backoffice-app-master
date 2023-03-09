<template>
  <div class="upload">
    <div
      class="content"
      @dragover.prevent
      @drop.prevent="drop"
    >
      <span class="title">Drag and drop your file here</span>
      <span>or</span>
      <label>
        <ui-button
          class="button"
          button-type="secondary"
          text="Choose file"
          icon="icon-plus_2"
          @clicked="openFilesDialog"
        />
        <input
          ref="fileinput"
          type="file"
          multiple
          hidden
          @input="onFileInput"
        >
      </label>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/common/library/UiButton'
export default {
  name: 'UploadStepOne',
  components: { UiButton },
  emits: ['files-collected'],
  data () {
    return {
      files: []
    }
  },
  methods: {
    drop (e) {
      this.uploadFiles(e.dataTransfer.files)
    },
    openFilesDialog () {
      this.$refs.fileinput.click()
    },
    onFileInput (e) {
      this.uploadFiles(e.target.files)
    },
    uploadFiles (files) {
      if (files.length) {
        this.$emit('files-collected', files)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .upload {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
    padding: 130px;
    max-width: 50%;
    width: 100%;
    border: 1px dashed var(--blue-color);
    border-radius: 10px;
    background-color: var(--secondary-background-color);

    .title {
      color: var(--blue-color);
      font-size: 24px;
      font-weight: 600;
    }

    .button {
      max-width: 170px;
    }
  }
</style>