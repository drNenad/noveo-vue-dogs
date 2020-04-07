import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

export default {
  isBreedsEmpty: state => isEmpty(state.breeds),
  getListOfBreeds: state => Object.keys(state.breeds),
  getImagesByBreed: state => breed => get(state.breeds[breed], 'images', []),
  getImagesForHome: state => {
    let images = [];

    for (const breed in state.breeds) {
      images.push(get(state.breeds[breed], 'images[0]', { breed }));
    }

    return images;
  },
  getFavorites: state => state.favorites
};
