import get from 'lodash/get';

export function getEntityIndexById(id, array) {
  let index = -1;

  if (Array.isArray(array) && array.length) {
    index = array.findIndex(obj => get(obj, 'id', null) === id);
  }

  return index;
}
