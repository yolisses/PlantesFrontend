import {User} from 'types/User';
import {concatWithCommas} from 'utils/concatWithCommas';

export function getUserLocationString(user: User) {
  return user?.state
    ? concatWithCommas([user.city, user.state])
    : 'Sem localização';
}
