import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '870876078379-fbcve7jhhn9udg1e37vpn0olekmr9bau.apps.googleusercontent.com',
});

export async function signIn() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth().signInWithCredential(googleCredential);
  const idTokenResult = await auth().currentUser.getIdTokenResult();
  return idTokenResult.token;
}

export function signOut() {
  auth().signOut();
}
