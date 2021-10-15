import {api} from '../api';

export async function getNewLink(
  plantId: SavedItemId,
  remoteFileName: string,
): Promise<SendLink> {
  const res = await api.post('plant-image-upload-link', {
    plantId,
    image: remoteFileName,
  });
  return res.data;
}
