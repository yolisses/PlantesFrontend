import {api} from 'api/api';

export async function getUploadInfo(): Promise<UploadInfo> {
  const res = await api.get('plants/image-link');
  return res.data;
}
