<template>
  <div class="statistics">
    <div
      class="title"
      v-text="$route.meta.title"
    />
    <div class="statistics__posts">
      <div class="statistics__posts-title">
        <span>Sellable</span>
        <additional-button
          text="See all"
          :icon="false"
        />
      </div>
      <div class="statistics__posts-content">
        <div class="items">
          <post-item
            v-for="item in [1, 2, 3, 4, 5, 6]"
            :key="item"
            class="item"
          />
        </div>
      </div>
    </div>
    <div class="statistics__inner">
      <div class="statistics__inner-column duo">
        <div class="name">Artworks</div>
        <statistic-block
          title="Accepted"
          counter="78"
        />
        <statistic-block
          title="Accepted"
          counter="78"
        />
      </div>
      <div class="statistics__inner-column solo">
        <div class="name">Acceptance rate</div>
        <statistic-container
          :top="{ title: 'Accepted', counter: 78 }"
          :bot="{ title: 'All', counter: 99 }"
        />
      </div>
      <div class="statistics__inner-column solo">
        <div class="name">Sellable artworks rate</div>
        <statistic-container
          :top="{ title: 'Sellable', counter: 78 }"
          :bot="{ title: 'Accepted', counter: 32 }"
        />
      </div>
    </div>
  </div>
</template>

<script>

import AdditionalButton from '@/components/common/AdditionalButton'
import PostItem from '@/components/Statistics/PostItem'
import StatisticBlock from '@/components/Statistics/StatisticBlock'
import StatisticContainer from '@/components/Statistics/StatisticContainer'

export default {
  name: 'StatisticsPage',
  components: { StatisticContainer, StatisticBlock, PostItem, AdditionalButton }
}
</script>

<style scoped lang="scss">
  .statistics {
    padding: 60px 0 0 60px;
    color: var(--dark-text-color);

    &__posts {
      margin-bottom: 60px;

      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 60px;
        margin-bottom: 30px;
        color: var(--dark-text-color);
        font-weight: 600;
      }

      &-content {
        position: relative;
        overflow: hidden;
        height: 140px;

        .items {
          position: absolute;
          display: flex;
          gap: 30px;
          height: 100%;
        }
      }
    }

    &__inner {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      padding-right: 60px;

      &-column {
        display: grid;
        grid-gap: 30px;

        .name {
          font-weight: 600;
        }

        &.duo {
          grid-template-rows: auto auto auto;
        }

        &.solo {
          grid-template-rows: auto 1fr;
        }
      }
    }
  }

  .title {
    font-size: 24px;
    color: var(--dark-text-color);
    font-weight: 600;
    margin-bottom: 50px;
  }
</style>