export function getIdFromUrl(url) {
  return typeof url === 'string' ? url.substring(url.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '') : null;
}
