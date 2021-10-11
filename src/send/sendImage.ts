import {brokenSendLink} from './brokenSendLink';
import {getNewLink} from './getNewLink';
import {pushImage} from './pushImage';
import {waitSomeTime} from './waitSomeTime';

export async function sendImage(image: Image, plantId: SavedItemId) {
  // while (!image.sent) {
  if (!image.sendLink) {
    try {
      image.sendLink = await getNewLink(plantId, image.remoteUri as string);
    } catch (err) {
      console.error('' + err);
      await waitSomeTime();
    }
  } else {
    try {
      await waitSomeTime();
      await pushImage(image);
    } catch (err) {
      console.error('error sending image: ', image.localUri, err);
      if (err === brokenSendLink) {
        image.sendLink = undefined;
      } else {
        await waitSomeTime();
      }
    }
  }
  // }
}
