import {brokenSendLink} from './brokenSendLink';
import {connectionError} from './connectionError';

export async function sendImage(image) {
  if (Math.random() > 0.5) {
    console.error('image sent:', image.localUri);
    image.sent = true;
  } else {
    image.sent = false;
    if (Math.random() > 0.5) {
      throw connectionError;
    } else {
      throw brokenSendLink;
    }
  }
}
