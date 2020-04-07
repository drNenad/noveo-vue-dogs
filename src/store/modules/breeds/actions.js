import { breedsService } from '@/services/api';
import { listOfBreedsMapper, breedImagesMapper, getEntityIndexById, getItemFromLocalStorage } from '@/helpers';
import get from 'lodash/get';

export default {
  async fetchBreeds({ commit }) {
    try {
      const { data: data } = await breedsService.getAllBreeds();

      commit('SET_BREEDS', listOfBreedsMapper(get(data, 'message', {})));
    } catch (error) {
      console.warn('Error while fetching breeds: ', error);
    }
  },
  async fetchImagesByBreed({ commit, getters }, breed) {
    try {
      const { data: data } = await breedsService.getAllImagesByBreed(breed);

      const images = breedImagesMapper({
        images: get(data, 'message', []),
        breed,
        favorites: getters.getFavorites
      });

      commit('SET_BREED_IMAGES', {
        images,
        breed
      });
    } catch (error) {
      console.warn('Error while fetching breeds: ', error);
    }
  },
  async fetchRandomImageByBreed({ commit, getters }, breed) {
    try {
      const { data: data } = await breedsService.getRandomImageByBreed(breed);

      const images = breedImagesMapper({
        images: get(data, 'message', {}),
        breed,
        favorites: getters.getFavorites
      });

      commit('SET_BREED_IMAGES', {
        images,
        breed
      });
    } catch (error) {
      console.warn('Error while fetching breeds: ', error);
    }
  },
  changeImageFavoriteStatus({ commit, dispatch, getters }, { id, breed, image, liked } = {}) {
    const index = getEntityIndexById(id, getters.getImagesByBreed(breed));

    if (index !== -1) {
      commit('CHANGE_IMAGE_LIKED_STATUS', { breed, index, liked });
    }

    if (liked) {
      dispatch('addImageToStorage', { id, breed, image, liked });
    } else {
      dispatch('removeImageFromStorage', id);
    }
  },
  addImageToStorage({ commit, getters }, image) {
    commit('ADD_IMAGE_TO_FAVORITES', image);
    localStorage.setItem('favorites', JSON.stringify(getters.getFavorites));
  },
  removeImageFromStorage({ commit, getters }, id) {
    const index = getters.getFavorites.findIndex(item => item.id === id);

    if (index !== -1) {
      commit('REMOVE_IMAGE_FROM_FAVORITES', index);
      localStorage.setItem('favorites', JSON.stringify(getters.getFavorites));
    }
  },
  getFavoritesFromStorage({ commit }) {
    const favorites = getItemFromLocalStorage('favorites');

    if (Array.isArray(favorites)) {
      commit('SET_FAVORITES', favorites);
    }
  }
};
