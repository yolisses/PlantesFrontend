import {useQuery} from 'react-query';

import {api} from 'api/api';
import {auth} from 'auth/auth';
import {User} from 'types/User';

async function getUser(userId) {
  if (userId === auth?.user?.id) {
    return auth?.user;
  }

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
