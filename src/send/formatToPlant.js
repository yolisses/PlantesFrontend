function getTrueValuedKeys(obj) {
  return Object.keys(obj).filter(key => obj[key] === true);
}

function getOrderValuedKeys(obj) {
  return Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .map(entry => entry[0]);
}

export function formatToPlant(item) {
  const {
    name,
    price,
    amount,
    description,
    tags: tagsObj,
    images: imagesObj,
    availabilities: {donate, swap},
  } = item;

  const tags = getTrueValuedKeys(tagsObj);
  const imagesCount = getOrderValuedKeys(imagesObj).length;

  return {
    name,
    tags,
    description,
    swap,
    price,
    donate,
    amount,
    imagesCount,
  };
}
