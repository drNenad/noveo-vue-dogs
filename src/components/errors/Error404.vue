<template>
  <section class="error-404">
    <h1>404</h1>
    <img :src="image">
  </section>
</template>

<script>
import { EMPTY_IMAGE } from '@/consts';

export default {
  name: 'Error404',
  computed: {
    image() {
      return EMPTY_IMAGE;
    }
  }
};
</script>
