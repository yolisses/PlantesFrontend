import {api} from 'api';
import {useQuery} from 'react-query';

async function getUser(userId) {
  try {
    const {data} = await api.get('user/' + userId);
    return data;
  } catch (err) {
    console.error(err.response);
  }
}
export function useUser(userId) {
  return useQuery(['user', userId], () => getUser(userId));
}
