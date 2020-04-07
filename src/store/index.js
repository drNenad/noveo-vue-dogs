import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import breeds from './modules/breeds/index';

export default new Vuex.Store({
  modules: {
    breeds
  }
});

