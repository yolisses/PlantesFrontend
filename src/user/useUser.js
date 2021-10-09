import {api} from 'api';
import {useQuery} from 'react-query';

export function useUser(userId) {
  async function getUser(userId) {
    const {data} = await api.get('user/' + userId);
    return data;
  }
  return useQuery(['user', userId], getUser);
}
