function convertToIdentityObject(array) {
  const result = {};
  for (let item of array) {
    result[item] = true;
  }
  console.error(result);
  return result;
}

function convertToIndexesObject(array) {
  const result = {};
  let counter = 1;
  for (let item of array) {
    result[item] = counter;
    counter++;
  }
  return result;
}

export function formatToEdit(item) {
  const {
    name,
    swap,
    donate,
    description,
    tags: tagsArray,
    amount: amountNumber,
    price: priceNumber,
    images: imagesArray,
  } = item;

  const tags = convertToIdentityObject(tagsArray);
  const images = convertToIndexesObject(imagesArray);
  const price = '' + priceNumber;
  const amount = '' + amountNumber;

  const availabilities = {
    swap,
    donate,
    sell: !!price,
  };

  return {
    name,
    tags,
    price,
    amount,
    images,
    description,
    availabilities,
  };
}
