import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from 'api';
import {auth} from './auth';

export function signOut() {
  AsyncStorage.setItem('userInfo', '').then(res => {
    try {
      auth.token = null;
      auth.user = null;
      auth.userId = null;
      api.defaults.headers.common.auth = '';
    } catch (err) {
      console.error(err);
    }
  });
}
