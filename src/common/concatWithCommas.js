export function concatWithCommas(...array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i] ? array[i] + ', ' : '';
  }
  if (result === '') {
    return '';
  }
  return result.slice(0, -2);
}
