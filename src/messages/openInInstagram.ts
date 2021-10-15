import {Linking} from 'react-native';

export async function openInInstagram(instagramUser) {
  const supported = await Linking.canOpenURL(
    `instagram://user?username=${instagramUser}`,
  );
  if (supported) {
    return await Linking.openURL(`instagram://user?username=${instagramUser}`);
  } else {
    return Linking.openURL(`https://api.instagram.com/${instagramUser}`);
  }
}
