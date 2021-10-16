import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setAuthorizationHeader} from 'api/api';
import {auth} from './auth';
import {authenticate} from './authenticate';

AsyncStorage.getItem('userInfo').then(async res => {
  try {
    const {token, user} = JSON.parse(res);
    auth.user = user;
    auth.token = token;

    const userInfo = await GoogleSignin.signInSilently();
    authenticate(userInfo.idToken);

    setAuthorizationHeader(token);
  } catch (err) {
    console.error(err);
  }
});
