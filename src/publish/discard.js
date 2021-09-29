export function discard(obj) {
  for (let key in obj) {
    delete obj[key];
  }
}
