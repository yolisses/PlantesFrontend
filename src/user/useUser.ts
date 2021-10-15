import {api} from 'api/api';
import {useQuery} from 'react-query';

async function getUser(userId) {
  try {
    const {data} = await api.get('users/' + userId);
    return data;
  } catch (err) {
    console.error(err.response);
  }
}
export function useUser(userId) {
  return useQuery(['user', userId], () => getUser(userId));
}
