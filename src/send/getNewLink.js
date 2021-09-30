import {api} from 'api';

export async function getNewLink({plantId, image}) {
  const res = await api.post('/plant-image-upload-link', {plantId, image});
  return res.data;
}
