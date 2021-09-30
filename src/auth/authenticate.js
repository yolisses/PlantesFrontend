import {api} from 'api';
import OneSignal from 'react-native-onesignal';
import {auth} from './auth';

export async function authenticate(idToken) {
  try {
    const res = await api.post('/google-sign-in', {idToken});
    const {token, user, email, emailAuthToken, id, idAuthToken} = res.data;
    auth.user = user;
    auth.userId = id;
    auth.token = token;

    console.error(auth);

    OneSignal.setEmail(email, emailAuthToken, err => {
      console.error(err);
    });

    OneSignal.setExternalUserId(id, idAuthToken, err => {
      console.error(err);
    });

    api.defaults.headers.common.auth = `Bearer ${token}`;
  } catch (err) {
    console.error(err);
  }
}
