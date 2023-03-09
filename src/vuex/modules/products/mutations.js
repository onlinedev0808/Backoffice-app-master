export default {
  UPDATE_PRODUCTS (state, status) {
    state.products = status.data
  },
  UPDATE_ARTWORKS (state, status) {
    state.artworks = status
  },
  UPDATE_PRODUCT_PREVIEW_COUNTER (state, productId) {
    state.products = state.products.map(p => {
      if (p.id === productId) {
        p.preview_count = p.preview_count + 1
      }
      return p
    })
  },
  ACCEPT_PRODUCT (state, { data, id }) {
    state.products = state.products.map(p => {
      if (p.id === id) {
        p.actions = [...data.actions]
      }
      return p
    })
  },
  REMOVE_PRODUCTS (state) {
    state.products = []
  },
  REMOVE_ONE_PRODUCT (state, id) {
    state.products = state.products.filter(p => p.id !== id)
  }
}
