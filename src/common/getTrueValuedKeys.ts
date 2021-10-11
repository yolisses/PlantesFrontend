export function getTrueValuedKeys(obj: object): string[] {
  const result = [];
  for (let key in obj) {
    if (obj[key] === true) {
      result.push(key);
    }
  }
  return result;
}
