<template>
  <li class="dropdown">
    <button :class="{ active: isActive }">
      <slot>Dropdown Menu</slot>
    </button>
    <div class="dropdown-content">
      <div v-for="(item, index) in items" :key="index" @click="$emit('dropdown-clicked')">
        <router-link :to="{ name: 'Breed', params: { breed: item }}">{{ item }}</router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DropdownButton',
  props: {
    items: {
      type: Array,
      required: true
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
