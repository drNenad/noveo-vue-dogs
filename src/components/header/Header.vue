<template>
  <header :class="{ 'mobile-visible': isMobileMenuVisible }">
    <nav>
      <ul>
        <li @click="hideMenu">
          <router-link to="/">Home</router-link>
        </li>
        <dropdown-button
          v-if="isDropdownVisible"
          :items="getListOfBreeds"
          :is-active="isDropdownActive"
          @dropdown-clicked="hideMenu"
        >
          List of Breeds
        </dropdown-button>
        <li @click="hideMenu">
          <router-link to="/favorites">Favorites</router-link>
        </li>
      </ul>
    </nav>

    <toggle-button :is-active="isMobileMenuVisible" @toggle="toggleMenu"/>
  </header>
</template>

<script>
import DropdownButton from '../common/buttons/DropdownButton';
import ToggleButton from '../common/buttons/ToggleButton';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    ToggleButton,
    DropdownButton
  },
  data() {
    return {
      isMobileMenuVisible: false
    };
  },
  computed: {
    ...mapGetters(['getListOfBreeds']),
    isDropdownVisible() {
      return Array.isArray(this.getListOfBreeds) && this.getListOfBreeds.length;
    },
    isDropdownActive() {
      return this.$route.name === 'Breed';
    }
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
    hideMenu() {
      this.isMobileMenuVisible = false;
    }
  }
};
</script>
