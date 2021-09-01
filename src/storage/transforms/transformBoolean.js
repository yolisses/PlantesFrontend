export const transformBoolean = {
  toLocal: value => '' + value,
  toData: value => {
    const possibleValues = {
      true: true,
      false: false,
    };
    return possibleValues[value];
  },
};
