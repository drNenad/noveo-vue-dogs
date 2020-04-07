<template>
  <div class="breed">
    Breed: {{ $route.params.breed }}
    <cards-list
      v-if="images.length"
      :items="images"
      :is-infinite-scroll="true"
    />
  </div>
</template>

<script>
import CardsList from '../components/blocks/grid/CardsList';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Breed',
  components: {
    CardsList
  },
  computed: {
    ...mapGetters(['getImagesByBreed']),
    images() {
      return this.getImagesByBreed(this.$route.params.breed);
    }
  },
  created() {
    this.fetchImagesByBreed(this.$route.params.breed);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchImagesByBreed(to.params.breed);
    next();
  },
  methods: {
    ...mapActions(['fetchImagesByBreed'])
  }
};
</script>
