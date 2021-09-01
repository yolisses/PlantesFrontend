export const transformNumber = {
  toLocal: value => {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) {
      console.error(
        'Trying to set invalid number value to local storage: ' +
          value +
          ', type ' +
          typeof value,
      );
      throw 'Trying to set invalid number value to local storage';
    }
    return '' + numberValue;
  },
  toData: value => (value !== null ? Number(value) : null),
};
