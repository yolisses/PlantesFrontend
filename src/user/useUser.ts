import {api} from 'api/api';
import {useQuery} from 'react-query';
import {User} from 'types/User';

async function getUser(userId) {
  try {
    const {data} = await api.get('users/' + userId);
    return data;
  } catch (err) {
    console.error(err.response);
  }
}
export function useUser(userId): {data: User} {
  return useQuery(['user', userId], () => getUser(userId));
}
