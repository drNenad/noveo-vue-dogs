<template>
  <div class="home">
    Home
    <cards-list
      v-if="getImagesForHome.length"
      :items="getImagesForHome"
      :is-fetch-random-image-if-empty="true"
      :is-infinite-scroll="true"
    />
  </div>
</template>

<script>
import CardsList from '@/components/blocks/grid/CardsList';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    CardsList
  },
  computed: {
    ...mapGetters(['getImagesForHome'])
  }
};
</script>
