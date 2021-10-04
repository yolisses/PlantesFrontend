export function getTrueValuedKeys(obj) {
  const result = [];
  for (let key in obj) {
    if (obj[key] === true) {
      result.push(key);
    }
  }
  return result;
}
