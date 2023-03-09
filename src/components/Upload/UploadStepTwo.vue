<template>
  <div
    class="files"
    :style="{ gridTemplateRows: `repeat(${files.length}, 60px)` }"
  >
    <file-component
      v-for="(file, index) in files"
      :key="index"
      :name="file.name"
      :upload-percentages="uploadPercentages[index]"
      :index="index"
    />
  </div>
</template>

<script>
import { uploadFiles } from '@/api/requests'
import FileComponent from '@/components/Upload/FileComponent'
import { createFormDataFileUpload } from '@/utils/helpers/helpers'

export default {
  name: 'UploadStepTwo',
  components: { FileComponent },
  props: {
    files: {
      type: FileList,
      required: true
    }
  },
  emits: ['remove-file', 'files-uploaded'],
  data () {
    return {
      uploadPercentages: Array.from({ length: this.files.length }, () => 0),
      filesData: []
    }
  },
  mounted () {
    this.uploadFiles()
  },
  methods: {
    remove (index) {
      if (this.uploadPercentages[index] === 100) return

      this.$emit('remove-file', index)
    },
    onUploadProgress (index, progressEvent) {
      this.uploadPercentages[index] = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )
    },
    uploadFiles () {
      [...this.files].forEach((file, index) => {
        const formData = createFormDataFileUpload(file, 'artwork')

        const fetchFn = this.onUploadProgress.bind(this, index)

        this.filesData.push(uploadFiles.bind(undefined, formData, fetchFn))
      })

      Promise.allSettled(this.filesData.map(fn => fn()))
        .then(data => {
          const fullFilledFiles = data.filter(d => d.status === 'fulfilled')

          this.$emit('files-uploaded', fullFilledFiles.length)
          this.filesData = []
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .files {
    display: grid;
    grid-gap: 30px;
  }

</style>