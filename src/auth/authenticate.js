import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from 'api';
import OneSignal from 'react-native-onesignal';
import {auth} from './auth';

export async function authenticate(idToken) {
  try {
    const res = await api.post('google-sign-in', {idToken});
    const {token, user, email, emailAuthToken, idAuthToken} = res.data;
    auth.user = user;
    auth.userId = user._id;
    auth.token = token;

    OneSignal.setEmail(email, emailAuthToken);
    OneSignal.setExternalUserId(user._id, idAuthToken);

    api.defaults.headers.common.auth = `Bearer ${token}`;

    AsyncStorage.setItem('userInfo', JSON.stringify({token, user, email}));
  } catch (err) {
    console.error('Error', err);
    console.error('Error', err.response);
  }
}
