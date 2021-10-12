import {getTrueValuedKeys} from '../utils/getTrueValuedKeys';

export function formatFormToItemInfo(itemFormData: ItemFormData): ItemInfo {
  const {
    name,
    availabilities,
    tags: tagsObj,
    description,
    amount,
  } = itemFormData;
  const {donate, swap, price} = availabilities;
  const tags = getTrueValuedKeys(tagsObj);

  const result = {
    name,
    tags,
    amount,
    description,
    price: price || null,
    swap: swap ? true : false,
    donate: donate ? true : false,
  };
  return result;
}
