export default {
  SET_BREEDS(state, breeds) {
    state.breeds = breeds;
  },
  SET_BREED_IMAGES(state, { images, breed } = {}) {
    state.breeds[breed].images = images;
  },
  CHANGE_IMAGE_LIKED_STATUS(state, { breed, index, liked } = {}) {
    state.breeds[breed].images[index].liked = liked;
  },
  ADD_IMAGE_TO_FAVORITES(state, image) {
    state.favorites.push(image);
  },
  REMOVE_IMAGE_FROM_FAVORITES(state, index) {
    state.favorites.splice(index, 1);
  },
  SET_FAVORITES(state, favorites) {
    state.favorites = favorites;
  }
};
