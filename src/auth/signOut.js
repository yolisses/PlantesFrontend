import {auth} from './auth';

export function signOut() {
  auth.token = null;
  auth.user = null;
  auth.userId = null;
}
