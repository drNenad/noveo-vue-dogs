<template>
  <section class="card-list-wrapper" v-infinite-scroll="loadMore">
    <item-card
      v-for="(item, index) in itemsLoaded"
      :key="index"
      :item="item"
      :is-fetch-random-image-if-empty="isFetchRandomImageIfEmpty"
    />
  </section>
</template>

<script>
import ItemCard from '@/components/blocks/cards/ItemCard';
import infiniteScroll from 'vue-infinite-scroll';

export default {
  name: 'CardsList',
  components: {
    ItemCard
  },
  directives: {
    infiniteScroll
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    isFetchRandomImageIfEmpty: {
      type: Boolean,
      required: false,
      default: false
    },
    isInfiniteScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      itemsToLoad: 20
    };
  },
  computed: {
    itemsLoaded() {
      return this.isInfiniteScroll ? this.items.slice(0, this.itemsToLoad) : this.items;
    }
  },
  methods: {
    loadMore() {
      if (this.isInfiniteScroll && this.itemsLoaded.length < this.items.length) {
        this.itemsToLoad += 20;
      }
    }
  }
};
</script>
