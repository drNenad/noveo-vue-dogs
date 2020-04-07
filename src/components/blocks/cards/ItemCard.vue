<template>
  <article ref="card">
    <img :src="image" @click.prevent="likeHandler">
    <div class="item-info">
      <span class="item-category" @click="gotoBreed">{{ breed }}</span>
      <heart-icon :is-favorite="liked" :is-disabled="isLikeDisabled" @like="likeHandler" />
    </div>
  </article>
</template>

<script>
import HeartIcon from '../../common/icons/HeartIcon';
import { EMPTY_IMAGE } from '@/consts';
import { mapActions } from 'vuex';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';

export default {
  name: 'ItemCard',
  components: {
    HeartIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isFetchRandomImageIfEmpty: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    image() {
      return get(this.item, 'image', EMPTY_IMAGE);
    },
    breed() {
      return get(this.item, 'breed', '');
    },
    liked() {
      return get(this.item, 'liked', false);
    },
    isLikeDisabled() {
      return isUndefined(this.item.liked);
    }
  },
  mounted() {
    this.fetchRandomItemCard();
  },
  methods: {
    ...mapActions(['fetchRandomImageByBreed', 'changeImageFavoriteStatus']),
    fetchRandomItemCard() {
      if (this.isFetchRandomImageIfEmpty && this.image === EMPTY_IMAGE) {
        this.fetchRandomImageByBreed(this.breed);
      }
    },
    likeHandler() {
      if (!this.isLikeDisabled) {
        this.changeImageFavoriteStatus({
          ...this.item,
          liked: !this.liked
        });
      }
    },
    gotoBreed() {
      if (this.$route.name !== 'Breed' && this.$route.params.breed !== this.breed) {
        this.$router.push({ name: 'Breed', params: { breed: this.breed } });
      }
    }
  }
};
</script>
