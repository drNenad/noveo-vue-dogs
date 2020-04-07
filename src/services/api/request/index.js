import api from './request';

export function getRequest(url, config = {}) {
  return api.get(url, config);
}
