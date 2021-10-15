import {api} from '../api/api';

export async function confirmSending(plantId: SavedItemId): Promise<SavedItem> {
  const res = await api.post('confirm-plant-sending', {plantId});
  return res.data;
}
