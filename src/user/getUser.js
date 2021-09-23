import {api} from 'api';

export async function getUser(userId) {
  const res = await api.get('/user/614c85e97244c7e73c35ca5c');
  return res.data;
}
