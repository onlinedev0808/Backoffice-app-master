<template>
  <artworks-wrapper>
    <template #items>
      <article-component
        v-for="product in getStoreProducts"
        :key="product.id"
        :product-id="product.id"
        :title="product.name"
        :image="product.file_url"
        :image-id="product.id"
        :hint="`${$options.MAX_REVIEWS - product.preview_count} Previews left`"
        @title-clicked="titleClick"
      >
        <template #buttons>
          <ui-button
            :loading="buttonLoading(product.id, 'left')"
            :disabled="buttonDisabled(product.id, 'left')"
            button-type="secondary"
            icon="icon-download"
            text="Download Artwork"
            transparent
            @clicked="download(product.id, product.file_url, product.name)"
          />
          <ui-button
            :loading="buttonLoading(product.id, 'right')"
            :disabled="product.preview_count === $options.MAX_REVIEWS || buttonDisabled(product.id, 'right')"
            button-type="secondary"
            icon="icon-upload"
            text="Upload Preview"
            @clicked="uploadPreview(product.id)"
          />
        </template>
      </article-component>
    </template>
  </artworks-wrapper>
</template>

<script>
import ArticleComponent from '@/components/common/ArticleComponent'
import { mapGetters } from 'vuex'
import UiButton from '@/components/common/library/UiButton'
import { createLink, createUploadInput, downloadFile } from '@/utils/helpers/helpers'
import ArtworksWrapper from '@/components/common/ArtworksWrapper'
import { notyText } from '@/globals/toastNotyText'

const leftButton = { text: 'Download Artwork', transparent: true, icon: 'icon-download' }
const rightButton = { text: 'Upload Preview', transparent: false, icon: 'icon-upload' }

export default {
  name: 'CreatePreview',
  inject: ['$emitter', '$toast'],
  leftButton,
  rightButton,
  MAX_REVIEWS: 5,
  components: { ArtworksWrapper, UiButton, ArticleComponent },
  data () {
    return {
      loadingButtons: {}
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
      .finally(() => {
      })
  },
  computed: {
    ...mapGetters(['getStoreProducts'])
  },
  methods: {
    download (id, fileUrl, filename) {
      if (!fileUrl) return

      downloadFile(fileUrl, filename)
    },
    uploadFile (id, formData) {
      return this.$store.dispatch('uploadPreview', { id, formData })
    },
    uploadPreview (id) {
      this.loadingButtons = { id, type: 'right' }

      const result = createUploadInput(id, this.uploadFile.bind(this))

      result
        .then(() => {
          this.loadingButtons = {}
          this.$toast.success(notyText.FILE_UPLOAD_RESOLVE)
        })
        .catch(e => {
          this.$toast.success(notyText.FILE_UPLOAD_REJECT)
          console.error(e)
        })
    },
    buttonDisabled (id, direction) {
      return id === this.loadingButtons.id && this.loadingButtons?.type === direction
    },
    buttonLoading (id, direction) {
      return id === this.loadingButtons.id && this.loadingButtons?.type === direction
    },
    titleClick (id) {
      const { preview_count } = this.getStoreProducts.find(p => p.id === id)

      if (!preview_count) {
        this.$toast.warning(notyText.PRODUCT_HAVE_NOT_PREVIEWS)
        return
      }

      createLink(`${location.origin}/previews/${id}`)
    }
  }
}
</script>

<style scoped>
  .name {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
  }
</style>