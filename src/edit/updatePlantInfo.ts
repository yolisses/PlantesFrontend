import {api} from '../api/api';
import {formatFormToItemInfo} from 'send/formatFormToItemInfo';

export async function updatePlantInfo(id: string, itemFormData: ItemFormData) {
  return await api.patch(
    'plant-info/' + id,
    formatFormToItemInfo(itemFormData),
  );
}
