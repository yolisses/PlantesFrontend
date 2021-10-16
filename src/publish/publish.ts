import {formatFormToItemInfo} from './formatFormToItemInfo';

export async function publish(itemFormData: ItemFormData) {
  console.error(itemFormData);
  const itemInfo = formatFormToItemInfo(itemFormData);
  console.error(itemInfo);
}
