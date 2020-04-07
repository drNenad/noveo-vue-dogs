import { getEntityIndexById } from '@/helpers';

describe('Test helper - getEntityIndexById', () => {
  const data = getDataSet();

  for (let i = 0; i < data.length; i += 1) {
    it(data[i].description, () => {
      expect(getEntityIndexById(data[i].id, data[i].array)).toEqual(data[i].result);
    });
  }
});

function getDataSet() {
  return [
    // 1
    {
      id: null,
      array: [],
      result: -1,
      description: 'getEntityIndexById - Array is empty and id null.'
    },
    // 2
    {
      id: undefined,
      array: undefined,
      result: -1,
      description: 'getEntityIndexById - Array and id is undefined.'
    },
    // 3
    {
      id: 152,
      array: [
        {}
      ],
      result: -1,
      description: 'getEntityIndexById - Array have empty obj.'
    },
    // 4
    {
      id: 152,
      array: [
        {
          id: 14
        },
        {
          id: 15
        }
      ],
      result: -1,
      description: 'getEntityIndexById - Ids are different.'
    },
    // 5
    {
      id: 152,
      array: [
        {
          id: 14
        },
        {
          id: 152
        }
      ],
      result: 1,
      description: 'getEntityIndexById - There is id in array.'
    },
    // 6
    {
      id: '152',
      array: [
        {
          id: 14
        },
        {
          id: 152
        }
      ],
      result: -1,
      description: 'getEntityIndexById - There is id in array, but different type.'
    }
  ];
}
