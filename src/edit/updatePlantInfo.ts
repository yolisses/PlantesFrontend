import {api} from 'api/api';

import {PlantId} from 'types/Plant';
import {formatFormToItemInfo} from 'publish/formatFormToItemInfo';

export async function updatePlantInfo(id: PlantId, itemFormData: ItemFormData) {
  const item = formatFormToItemInfo(itemFormData);
  return await api.patch('plants/' + id, item);
}
