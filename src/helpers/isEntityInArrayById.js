import get from 'lodash/get';

export function isEntityInArrayById(id, array) {
  return Array.isArray(array) && array.length ? array.some(el => get(el, 'id', null) === id) : false;
}
