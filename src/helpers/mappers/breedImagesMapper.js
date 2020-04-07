import { getIdFromUrl, isEntityInArrayById } from '@/helpers';

export function breedImagesMapper({ images, breed, favorites } = {}) {
  let imagesMapped = [];

  if (Array.isArray(images) && images.length) {
    imagesMapped = images.map(image => {
      const id = getIdFromUrl(image);

      return {
        breed,
        image,
        liked: isEntityInArrayById(id, favorites),
        id
      };
    });
  } else if (typeof images === 'string') {
    const id = getIdFromUrl(images);

    imagesMapped.push({
      breed,
      image: images,
      liked: isEntityInArrayById(id, favorites),
      id
    });
  }

  return imagesMapped;
}
