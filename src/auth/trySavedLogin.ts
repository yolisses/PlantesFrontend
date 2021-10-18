import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setAuthorizationHeader} from 'api/api';
import SplashScreen from 'react-native-splash-screen';
import {auth} from './auth';
import {authenticate} from './authenticate';

export async function trySavedLogin() {
  const res = await AsyncStorage.getItem('userInfo');
  try {
    const {token, user} = JSON.parse(res);
    auth.token = token;
    auth.user = user;
    SplashScreen.hide();
  } catch (err) {
    console.error(err);
  }

  try {
    const userInfo = await GoogleSignin.signInSilently();
    authenticate(userInfo.idToken);
    setAuthorizationHeader(token);
    SplashScreen.hide();
  } catch (err) {
    console.error(err);
  }

  SplashScreen.hide();
}
