import {api} from 'api/api';

export async function getNewLink(): Promise<SendLink> {
  const res = await api.get('plants/image-link');
  return res.data;
}
