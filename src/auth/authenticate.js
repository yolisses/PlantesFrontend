import AsyncStorage from '@react-native-async-storage/async-storage';
import OneSignal from 'react-native-onesignal';

import {api} from 'api';
import {auth} from './auth';
import {setAuthorizationHeader} from 'api/api';

export async function authenticate(idToken) {
  try {
    const res = await api.post('auth/sign-in', {googleToken: idToken});
    const {token, user, email, emailAuthToken, idAuthToken} = res.data;
    auth.user = user;
    auth.token = token;
    auth.userId = user.id;

    OneSignal.setEmail(email, emailAuthToken);
    OneSignal.setExternalUserId(user._id, idAuthToken);

    setAuthorizationHeader(token);

    AsyncStorage.setItem('userInfo', JSON.stringify({token, user, email}));
  } catch (err) {
    console.error(err.response || err);
  }
}
