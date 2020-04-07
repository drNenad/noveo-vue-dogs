import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Breed from '../views/Breed.vue';
import Favorites from '../views/Favorites.vue';
import Error404 from '@/components/errors/Error404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/breed/:breed',
    name: 'Breed',
    component: Breed
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  { path: '*', component: Error404 }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
