<template>
  <span class="toggle-nav" :class="{ 'open': isActive }" @click="toggleHandler"></span>
</template>

<script>
  export default {
    name: 'ToggleButton',
    props: {
      isActive: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    methods: {
      toggleHandler() {
        this.$emit('toggle');
      }
    }
  };
</script>
