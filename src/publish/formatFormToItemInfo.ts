import {getTrueValuedKeys} from 'utils/getTrueValuedKeys';

export function formatFormToItemInfo(itemFormData: ItemFormData): ItemInfo {
  const {
    name,
    availabilities,
    tags: tagsObj,
    description,
    amount,
    images: imagesParam,
  } = itemFormData;
  const {donate, swap, price} = availabilities;
  const tags = getTrueValuedKeys(tagsObj);
  const images = Object.values(imagesParam)
    .sort((a, b) => a.index - b.index)
    .map(image => image.key!);

  const result = {
    name,
    tags,
    images,
    price: price || null,
    swap: swap ? true : false,
    donate: donate ? true : false,
    amount: amount && amount !== '' ? Number(amount) : null,
    description: description && description !== '' ? description : null,
  };
  return result;
}
