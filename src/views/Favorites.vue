<template>
  <div class="Favorites">
    Favorites
    <cards-list v-if="getFavorites.length" :items="getFavorites" />
  </div>
</template>

<script>
import CardsList from '../components/blocks/grid/CardsList';
import { mapGetters } from 'vuex';

export default {
  name: 'Favorites',
  components: {
    CardsList
  },
  computed: {
    ...mapGetters(['getFavorites'])
  }
};
</script>
