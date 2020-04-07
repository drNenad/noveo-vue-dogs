<template>
  <div id="app">
    <Header />
    <router-view v-if="!isBreedsEmpty"/>
  </div>
</template>

<script>
import Header from './components/header/Header';
import { mapGetters } from 'vuex';

export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters(['isBreedsEmpty'])
  },
  async created() {
    await this.$store.dispatch('getFavoritesFromStorage');
    await this.$store.dispatch('fetchBreeds');
  }
};
</script>

<style lang="scss">
@import 'assets/styles';
</style>
