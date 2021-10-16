import {brokenSendLink} from './legacy/brokenSendLink';
import {getNewLink} from './legacy/getNewLink';
import {pushImage} from './legacy/pushImage';
import {waitSomeTime} from './legacy/waitSomeTime';

export async function sendImage(image: Image) {
  while (!image.sent) {
    if (!image.sendLink) {
      try {
        image.sendLink = await getNewLink();
        console.error('send link got', image.sendLink);
      } catch (err) {
        console.error('error getting send link', err.response || err);
        await waitSomeTime();
      }
    } else {
      try {
        await pushImage(image);
        image.sent = true;
      } catch (err) {
        console.error('error sending image: ', image.localUri, err);
        if (err === brokenSendLink) {
          image.sendLink = undefined;
        } else if (err?.status === 400) {
          return;
        } else {
          await waitSomeTime();
        }
      }
    }
  }
  console.error('image sent ' + image.localUri);
}
