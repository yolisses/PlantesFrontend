import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetAuthorizationHeader} from 'api/api';
import {auth} from './auth';

export function signOut() {
  AsyncStorage.setItem('userInfo', '').then(res => {
    try {
      auth.token = null;
      auth.user = null;
      auth.userId = null;
      resetAuthorizationHeader();
    } catch (err) {
      console.error(err);
    }
  });
}
