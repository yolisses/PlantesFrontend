import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';
import {auth} from './auth';
import {authenticate} from './authenticate';

export async function trySavedLogin() {
  const res = await AsyncStorage.getItem('userInfo');
  const {token, user} = JSON.parse(res);
  try {
    auth.token = token;
    auth.user = user;
    SplashScreen.hide();
  } catch (err) {
    console.error(err);
  }

  try {
    const userInfo = await GoogleSignin.signInSilently();
    authenticate(userInfo.idToken);
    SplashScreen.hide();
  } catch (err) {
    console.error(err);
  }

  SplashScreen.hide();
}
