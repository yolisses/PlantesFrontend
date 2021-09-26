import {brokenSendLink} from './brokenSendLink';
import {getNewLink} from './getNewLink';
import {pushImage} from './pushImage';
import {waitSomeTime} from './waitSomeTime';

export async function sendImage({image, plantId}) {
  while (true) {
    if (image.sent) {
      console.error('image sent');
      return;
    } else if (!image.sendLink) {
      try {
        const link = await getNewLink({image: image.image, plantId});
        image.sendLink = link;
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
          image.sendLink = false;
        } else {
          await waitSomeTime();
        }
      }
    }
  }
}
