import {formatFormToItemInfo} from 'send/formatFormToItemInfo';

export function publish(itemFormData: ItemFormData) {
  console.error(itemFormData);
  console.error(formatFormToItemInfo(itemFormData));
}
