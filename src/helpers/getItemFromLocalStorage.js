export function getItemFromLocalStorage(item) {
  let dataLS = null;

  try {
    dataLS = JSON.parse(localStorage.getItem(item));
  } catch {
    localStorage.clear();
  }

  return dataLS;
}
