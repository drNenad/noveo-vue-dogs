export function listOfBreedsMapper(breeds) {
  const breedsMapped = {};

  if (typeof breeds !== 'undefined') {
    for (const breed in breeds) {
      breedsMapped[breed] = {
        subBreeds: breeds[breed],
        images: []
      };
    }
  }

  return breedsMapped;
}
