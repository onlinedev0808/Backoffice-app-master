<template>
  <page-content :title="$options.titles[step]">
    <template #title="{ title }">
      <ui-title class="title" :text="title" />
    </template>
    <upload-step-one
      v-if="step === 'one'"
      @files-collected="uploadFiles"
    />
    <upload-step-two
      v-if="step === 'two'"
      :files="files"
      @remove-file="removeFile"
      @files-uploaded="filesWasUploaded"
    />
    <upload-step-three
      v-if="step === 'three'"
      :files-length="filesResolved"
      @files-uploaded="uploadFiles"
      @done="nextStep('one')"
    />
  </page-content>
</template>

<script>
import PageContent from '@/components/common/PageContent'
import UploadStepOne from '@/components/Upload/UploadStepOne'
import UploadStepTwo from '@/components/Upload/UploadStepTwo'
import UiTitle from '@/components/common/library/UiTitle'
import UploadStepThree from '@/components/Upload/UploadStepThree'

const titles = {
  one: 'Upload files',
  two: 'Your files have started uploading',
  three: 'Success!'
}

export default {
  name: 'UploadPage',
  titles,
  components: { UploadStepThree, UiTitle, UploadStepTwo, UploadStepOne, PageContent },
  data () {
    return {
      files: undefined,
      step: 'one',
      title: '',
      filesResolved: 0
    }
  },
  methods: {
    uploadFiles (files) {
      this.files = files

      this.nextStep('two')
    },
    nextStep (step) {
      this.step = step
    },
    removeFile (index) {
      this.files = this.files.filter((_, i) => i !== index)
    },
    filesWasUploaded (filesLength) {
      if (!filesLength) {
        this.nextStep('one')
        return
      }

      this.filesResolved = filesLength
      this.nextStep('three')
    }
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 60px;
  }
</style>