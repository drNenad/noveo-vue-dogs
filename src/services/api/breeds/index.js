import { getRequest } from '../request';

export const breedsService = {
  getAllBreeds() {
    return getRequest('/breeds/list/all')
      .then(response => response)
      .catch(error => Promise.reject(error));
  },
  getAllImagesByBreed(breed) {
    return getRequest(`breed/${breed}/images`)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },
  getRandomImageByBreed(breed) {
    return getRequest(`breed/${breed}/images/random`)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }
};
