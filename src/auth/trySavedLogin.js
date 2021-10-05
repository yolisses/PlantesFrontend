import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from 'api';
import {auth} from './auth';

AsyncStorage.getItem('userInfo').then(res => {
  try {
    const {token, user} = JSON.parse(res);
    auth.user = user;
    auth.userId = user._id;
    auth.token = token;

    // console.error(token);

    api.defaults.headers.common.auth = `Bearer ${token}`;
  } catch (err) {
    console.error(err);
  }
  // console.error(JSON.parse(res));
});
