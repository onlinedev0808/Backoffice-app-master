<template>
  <artworks-wrapper>
    <template #headerBtn>
      <additional-button text="Today" />
    </template>
    <template #items>
      <article-component
        v-for="product in products"
        :key="product.id"
        :product-id="product.id"
        :title="product.name"
        :image="product.file"
        :image-id="product.id"
        :left-button="$options.leftButton"
        :right-button="$options.rightButton"
        :status="product.actions?.[0]?.status || ''"
        :loading="loadingButtons?.id === product.id ? loadingButtons : {}"
        :href="product.file"
        :is-buttons="isButtons"
        @left-button-click="decline"
        @right-button-click="accept"
        @title-clicked="clickTitle"
      >
        <template #buttons>
          <ui-button
            :loading="buttonLoading(product.id, 'left')"
            :disabled="buttonDisabled(product.id, 'left')"
            button-type="secondary"
            text="Decline"
            transparent
            @clicked="decline(product.id)"
          />
          <ui-button
            :loading="buttonLoading(product.id, 'right')"
            :disabled="buttonDisabled(product.id, 'right')"
            button-type="secondary"
            text="Accept"
            @clicked="accept(product.id)"
          />
        </template>
      </article-component>
    </template>
  </artworks-wrapper>
</template>

<script>
import ArticleComponent from '@/components/common/ArticleComponent'
import AdditionalButton from '@/components/common/AdditionalButton'
import { mapGetters } from 'vuex'
import UiButton from '@/components/common/library/UiButton'
import ArtworksWrapper from '@/components/common/ArtworksWrapper'
import { createLink } from '@/utils/helpers/helpers'
import { notyText } from '@/globals/toastNotyText'

const leftButton = { text: 'Decline', transparent: true }
const rightButton = { text: 'Accept', transparent: false }

export default {
  name: 'ReviewPage',
  leftButton,
  rightButton,
  reviewStatus: 'accepted',
  inject: ['$toast'],
  components: { ArtworksWrapper, UiButton, AdditionalButton, ArticleComponent },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      loadingButtons: {},
      isButtons: true
    }
  },
  mounted () {
    if (this.$route.name === 'productPreviews') {
      this.$store.dispatch('getProductPreviews', this.$route.params.id)
      this.isButtons = false
      return
    }
    this.$store.dispatch('getProducts')
  },
  computed: {
    ...mapGetters(['getStoreProducts']),
    products () {
      return !this.items.length ? this.getStoreProducts : this.items
    }
  },
  methods: {
    accept (id) {
      this.loadingButtons = { id, type: 'right' }

      this.$store.dispatch('acceptProduct', id)
        .then(() => {
          this.$toast.success(notyText.ACCEPT_RESOLVE)
        })
        .finally(() => {
          this.loadingButtons = {}
        })
    },
    decline (id) {
      this.loadingButtons = { id, type: 'left' }

      this.$store.dispatch('removeProduct', id)
        .then(data => {
          this.$toast.success(data?.message || notyText.PREVIEW_UPLOAD_RESOLVE)
        })
        .finally(() => {
          this.loadingButtons = {}
        })
    },
    buttonDisabled (id, direction) {
      const { actions } = this.getStoreProducts.find(p => p.id === id)

      return actions?.[0]?.status === 'accepted' && direction === 'right' ||
        id === this.loadingButtons.id && this.loadingButtons?.type === direction
    },
    buttonLoading (id, direction) {
      return id === this.loadingButtons.id && this.loadingButtons?.type === direction
    },
    clickTitle (id) {
      const { file_url } = this.getStoreProducts.find(p => p.id === id)

      createLink(file_url)
    }
  }
}
</script>