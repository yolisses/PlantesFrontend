import {Linking} from 'react-native';

export async function openInWhatsapp(phoneNumber) {
  const supported = await Linking.canOpenURL(
    `whatsapp://send?phone=${phoneNumber}`,
  );
  if (supported) {
    return Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  } else {
    return Linking.openURL(
      `https://api.whatsapp.com/send?phone=${phoneNumber}`,
    );
  }
}
