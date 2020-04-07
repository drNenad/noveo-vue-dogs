<template>
  <div class="like-icon" :class="{ 'favorite': isFavorite, 'disabled': isDisabled }" @click="likeHandler"></div>
</template>

<script>
export default {
  name: 'HeartIcon',
  props: {
    isFavorite: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    likeHandler() {
      if (!this.isDisabled) {
        this.$emit('like');
      }
    }
  }
};
</script>
