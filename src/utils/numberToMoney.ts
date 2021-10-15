export function numberToMoney(number) {
  return number.toFixed(2).replace('.', ',').replace(',00', '');
}
