export function removeImageInObject(old: ImagesObj, uri: string): ImagesObj {
  const newValue = {...old};
  delete newValue[uri];
  let counter = 1;
  for (let key in newValue) {
    newValue[key].index = counter;
    counter += 1;
  }
  return newValue;
}
