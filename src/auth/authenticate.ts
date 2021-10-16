import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from 'api/api';
import {setAuthorizationHeader} from 'api/api';
import {auth} from './auth';

export async function authenticate(idToken: string) {
  try {
    const res = await api.post('auth/sign-in', {googleToken: idToken});
    const {token, user} = res.data;
    auth.user = user;
    auth.token = token;

    setAuthorizationHeader(token);

    AsyncStorage.setItem('userInfo', JSON.stringify({token, user}));
  } catch (err) {
    console.error(err.response || err);
  }
}
