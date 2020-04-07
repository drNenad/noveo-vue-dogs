import { breedImagesMapper } from '@/helpers';

describe('Test helper - breedImagesMapper', () => {
  const data = getDataSet();

  for (let i = 0; i < data.length; i += 1) {
    it(data[i].description, () => {
      expect(breedImagesMapper(data[i].data)).toEqual(data[i].result);
    });
  }
});

function getDataSet() {
  return [
    // 2
    {
      data: undefined,
      result: [],
      description: 'breedImagesMapper - data is undefined.'
    },
    // 2
    {
      data: {
        images: null,
        breed: null,
        favorites: null
      },
      result: [],
      description: 'breedImagesMapper - all params are null.'
    },
    // 3
    {
      data: {
        images: undefined,
        breed: undefined,
        favorites: undefined
      },
      result: [],
      description: 'breedImagesMapper - all params are undefined.'
    },
    // 4
    {
      data: {
        images: [],
        breed: '',
        favorites: []
      },
      result: [],
      description: 'breedImagesMapper - all params are empty.'
    },
    // 5
    {
      data: {
        images: ['https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg'],
        breed: 'test',
        favorites: []
      },
      result: [
        {
          breed: 'test',
          image: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg',
          liked: false,
          id: 'n02110627_10787'
        }
      ],
      description: 'breedImagesMapper - all params are ok, favorites is empty.'
    },
    // 6
    {
      data: {
        images: ['https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg'],
        breed: 'test',
        favorites: undefined
      },
      result: [
        {
          breed: 'test',
          image: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg',
          liked: false,
          id: 'n02110627_10787'
        }
      ],
      description: 'breedImagesMapper - all params are ok, favorites is undefined.'
    },
    // 7
    {
      data: {
        images: ['https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg'],
        breed: 'test',
        favorites: [
          {
            id: 'n02110627_10787'
          }
        ]
      },
      result: [
        {
          breed: 'test',
          image: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10787.jpg',
          liked: true,
          id: 'n02110627_10787'
        }
      ],
      description: 'breedImagesMapper - all params are ok, image is in favorites.'
    }
  ];
}
