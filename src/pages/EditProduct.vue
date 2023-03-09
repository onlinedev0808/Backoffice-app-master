<template>
  <page-content>
    <ProgressSpinner v-if="isLoading" style="position: absolute;left: 50%; height: 50%;z-index: 10;" />

    <div>
      <div class="inputs">
        <ui-input v-model="model.name" label="Name" placeholder="Product name" required />
        <ui-input v-model="model.description" label="Description" placeholder="Description" required />
        <ui-select v-model="model.styles" label="Style (Optional)" @option-selected="styleSelected"
          placeholder="Choose style" required />
        <ui-select v-model="model.subjects" label="Subject (Optional)" @option-selected="subjectsSelected"
          placeholder="Choose Subject" required />
        <ui-select v-model="model.maincolors" label="Main_Color (Optional)" @option-selected="mainColorsSelected"
          placeholder="Choose Main_Color" required />
        <ui-select v-model="model.secondcolors" label="Secondary_Color (Optional)" @option-selected="secondColorsSelected"
          placeholder="Choose Secondary_Color" required />
      </div>
      <div class="file_upload">
        <ui-input v-model="model.filename" label="File" placeholder="File" />
        <ui-button class="upload_button" height="60px" text="Upload" @click="clickUpload" />
        <input ref="file" type="file" accept="image/*" hidden @change="onUploadFileChange" />
      </div>
      <ui-button class="save" height="60px" text="Save changes" @clicked="save(14)" />
    </div>
  </page-content>
</template>
  
<script>
import axios from 'axios'
import { BASE_URL } from '@/api/main'
import { getLSItem } from '@/utils/helpers/helpers'
import UiInput from '@/components/common/library/UiInput'
import UiSelect from '@/components/common/library/UiSelect'
import UiButton from '@/components/common/library/UiButton'
import PageContent from '@/components/common/PageContent'
import maincolors from '@/utils/countries_answers/maincolors'
import secondcolors from '@/utils/countries_answers/secondcolors'
import styles from '@/utils/countries_answers/styles'
import subjects from '@/utils/countries_answers/subjects'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import FileUpload from 'primevue/fileupload';
import ProgressSpinner from 'primevue/progressspinner';

export default {
  name: 'EditProductPage',
  components: { PageContent, UiButton, UiSelect, UiInput, FileUpload, ProgressSpinner },
  inject: {
    $toast: {
      from: '$toast'
    }
  },
  data() {
    return {
      v$: useValidate(),
      model: {
        name: '',
        description: '',
        styles: [
          ...styles
        ],
        subjects: [
          ...subjects
        ],
        maincolors: [
          ...maincolors
        ],
        secondcolors: [
          ...secondcolors
        ],
        file: null,
        filename: '',
      },
      isLoading: false
    }
  },
  validations() {
    return {
      model: {
        name: { required },
        description: { required },
        style: { required },
        subject: { required },
        maincolors: { required },
        secondcolors: { required },
      }
    }
  },
  methods: {
    save(id) {
      const style = this.model.styles.find(style => style.selected)
      const subject = this.model.subjects.find(subject => subject.selected)
      const maincolors = this.model.maincolors.find(maincolors => maincolors.selected)
      const secondcolors = this.model.secondcolors.find(secondcolors => secondcolors.selected)

      if (!this.accountValidation(style, subject, maincolors, secondcolors)) {
        this.$toast.warning("Invalid input value!")
        return
      }

      let req_data = {
        id: id,
        name: this.model.name,
        description: this.model.description,
        style: style.key,
        subject: subject.key,
        main_color: maincolors.key,
        secondary_color: secondcolors.key,
      }

      if (this.model.file != null) {
        req_data.file = this.model.file
      }

      this.isLoading = true

      axios.post(`${BASE_URL}/products/${id}`, req_data, {
        headers: {
          Authorization: `Bearer ${getLSItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.$toast.success("success")
        this.isLoading = false
      }).catch((err) => {
        this.$toast.error("error!")
        this.isLoading = false
      })
    },

    clickUpload() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click()
    },

    onUploadFileChange(event) {
      if (event.target.files[0].size > 1024 * 1024 * 10) {
        this.$toast.warning("File too big!")
        return;
      }

      this.model.filename = event.target.files[0].name
      this.model.file = event.target.files[0]
    },

    accountValidation(style, subject, maincolors, secondcolors) {
      if (this.model.name != '' &&
        this.model.description != '' &&
        style != null &&
        subject != null &&
        maincolors != null &&
        secondcolors != null) {
        return true
      }
      return false
    },

    styleSelected(key) {
      this.model.styles = this.model.styles.map(style => {
        style.selected = style.key === key
        return style
      })
    },

    subjectsSelected(key) {
      this.model.subjects = this.model.subjects.map(subject => {
        subject.selected = subject.key === key
        return subject
      })
    },

    mainColorsSelected(key) {
      this.model.maincolors = this.model.maincolors.map(maincolor => {
        maincolor.selected = maincolor.key === key
        return maincolor
      })
    },

    secondColorsSelected(key) {
      this.model.secondcolors = this.model.secondcolors.map(secondcolor => {
        secondcolor.selected = secondcolor.key === key
        return secondcolor
      })
    },
  }
}
</script>
  
<style lang="scss" scoped>
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin-bottom: 60px;
}

.file_upload {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
}

.save {
  margin-left: auto;
  margin-top: 30px;
}

.upload_button {
  width: 120px;
}

.product_edit_error {
  padding: 20px;
  margin-bottom: 10px;
  text-align: left;
  border-radius: 5px;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.product_edit_success {
  padding: 20px;
  margin-bottom: 10px;
  text-align: left;
  border-radius: 5px;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
</style>