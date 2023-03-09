<template>
  <div class="table-wrapper">
    <table class="table">
      <thead class="thead">
        <tr>
          <th v-for="(th, index) in $options.tableHeaderKeys" :key="`th-${index}`" v-text="$options.tableHeader[th]"
            class="th" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="artwork in artworks.data" :key="`artwork-${artwork.id}`">
          <td class="td"><img class="artwork_img" :src="artwork.file_url" /></td>
          <td class="td">{{ artwork.name }}</td>
          <td class="td">?</td>
          <td class="td"></td>
          <td class="td"></td>
          <td class="td">{{ new Date(artwork.created_at).toLocaleString('nl-NL') }}</td>
          <td class="td">{{ new Date(artwork.updated_at).toLocaleString('nl-NL') }}</td>
          <td class="td">{{ artwork.preview_count }}</td>
          <td class="td"></td>
          <td class="td-center"><button class="edit_btn" @click="edit(artwork)">Edit</button></td>
          <td class="td-center"><button class="delete_btn">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import roles from '@/globals/roles'
import { mapGetters } from 'vuex'

const tableHeader = {
  image_thumbnail: 'Image',
  product_title: 'Title',
  status: 'Status',
  product_type: 'Product type',
  saleable: 'Saleable',
  upload: 'Upload',
  last_edit: 'Last edit',
  views: 'Views',
  sales: 'Sales',
  edit: 'Edit',
  delete: 'Delete'

}

export default {
  name: 'ManageArtworksTable',
  tableHeader,
  tableHeaderKeys: Object.keys(tableHeader),
  inject: ['$toast'],
  props: {
    artworks: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    edit(artwork) {
      const msg = artwork.name + 'clicked edit button'
      this.$router.push({ name: 'editProduct'})
    }
  },
  mounted() {
    if (this.getUserRole.name === roles.CREATOR) {
      this.$store.dispatch('artworks')
        .catch(e => {
          this.$toast.error(e)
        })
    } else if (this.getUserRole.name === roles.ART_DIRECTOR) {
      this.$store.dispatch('getProducts')
        .catch(e => {
          this.$toast.error(e)
        })
    }
  },
  computed: {
    ...mapGetters(['getUserRole'])
  }
}
</script>

<style scoped>
.table {
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  width: 100%;
  background-color: var(--secondary-background-color);
}

.thead {
  height: 84px;
  color: var(--light-text-color);
}

.th {
  border: 1px solid var(--table-border-color);
  font-weight: 400;
}

.td {
  height: 64px;
  border: 1px solid var(--table-border-color);
  padding-left: 24px;
  color: var(--dark-text-color);
  text-align: center;
}

.td-center {
  text-align: center;
  border: 1px solid var(--table-border-color);
}

.artwork_img {
  width: 200px;
  height: 100px;
}

.edit_btn,
.delete_btn {
  border-radius: 4px;
  color: white;
  padding: 5px 5px;
  width: 65px;
}

.delete_btn {
  background-color: #9c3d3a;
}

.edit_btn {
  background-color: rgb(96, 201, 13);
}
</style>