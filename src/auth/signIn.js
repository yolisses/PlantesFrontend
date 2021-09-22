// import statusCodes along with GoogleSignin
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

// Somewhere in your code
export const signIn = async () => {
  console.error('macaxeireyers');
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.error(userInfo);
    return userInfo;
  } catch (error) {
    console.error(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

// Somewhere in your code
export const signInSilently = async () => {
  console.error('mandacaruneos');
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signInSilently();
    console.error(userInfo);
    return userInfo;
  } catch (error) {
    console.error(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
