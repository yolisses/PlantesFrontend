function convertToIdentityObject(array: string[]): BooleansObj {
  const result = {};
  for (let item of array) {
    result[item] = true;
  }
  return result;
}

function convertToIndexesObject(array: string[]): ListObj {
  const result = {};
  let counter = 1;
  for (let item of array) {
    result[item] = counter;
    counter++;
  }
  return result;
}

export function formatToEdit(item: SavedItem): ItemFormData {
  const {
    name,
    swap,
    donate,
    description,
    tags: tagsArray,
    price: priceNumber,
    images: imagesArray,
    amount: amountNumber,
  } = item;

  const tags = convertToIdentityObject(tagsArray);
  const images = convertToIndexesObject(imagesArray);
  const price = priceNumber ? '' + priceNumber : undefined;
  const amount = amountNumber ? '' + amountNumber : undefined;

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
