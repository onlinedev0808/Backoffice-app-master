<template>
  <article class="article">
      <cld-image
        v-if="image"
        class="image"
        :public-id="image"
        :style="$options.inlineStyles"
      />
      <img
        v-else
        src="../../assets/images/article.jpg"
        alt="article"
      >
      <div
        class="title"
        :style="{ justifyContent: !isButtons ? 'center': 'space-between' }"
      >
        <slot name="title">
          <span
            class="name"
            v-text="title"
            @click="$emit('title-clicked', productId)"
          />
        </slot>
        <div
          class="hint"
          v-text="hint"
        />
      </div>
      <div class="buttons">
        <slot
          v-if="isButtons"
          name="buttons"
        />
      </div>
  </article>
</template>

<script>

export default {
  name: 'ArticleComponent',
  emits: ['left-button-click', 'right-button-click', 'title-clicked'],
  inlineStyles: { objectFit: 'contain', width: '100%' },
  props: {
    title: {
      type: String,
      required: true
    },
    hint: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    productId: {
      type: Number,
      default: -1
    },
    isButtons: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
  .article {
      display: grid;
      width: 30%;
      grid-template-rows: 180px 16px 48px;
      grid-gap: 15px;
      margin-bottom: 65px;

      .title {
        display: flex;
        align-items: center;
        color: var(--light-text-color);
        overflow: hidden;
        gap: 10px;

        .name {
          color: var(--dark-text-color);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 80%;
          cursor: pointer;
        }

        .hint {
          font-size: 14px;
          white-space: nowrap;
        }
      }

    .buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    }
  }

  @media screen and (max-width: 1360px) {
    .article {
      width: 350px;
    }
  }
  @media screen and (max-width: 1130px) {
    .article {
      width: 45%;
      grid-template-rows: 280px 16px 48px;
    }
  }
</style>