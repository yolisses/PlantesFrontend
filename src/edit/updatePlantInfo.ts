import {api} from 'api/api';

export async function updatePlantInfo(id: string, itemFormData: ItemFormData) {
  return await api.patch('plant-info/' + id);
}
