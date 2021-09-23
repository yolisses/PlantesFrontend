import {brokenSendLink} from './brokenSendLink';
import {getNewLink} from './getNewLink';
import {pushImage} from './pushImage';
import {waitSomeTime} from './waitSomeTime';

export async function sendImage({image, plantId}) {
  console.error('send image');
  while (true) {
    if (image.sent) {
      console.error('image sent');
      return;
    } else if (!image.sendLink) {
      console.error('image without send link');
      try {
        console.error('trying to get link');
        const link = await getNewLink({image: image.image, plantId});
        console.error('got link:', link);
        image.sendLink = link;
        console.error('image:', image);
      } catch (err) {
        console.error('' + err);
        await waitSomeTime();
      }
    } else {
      try {
        console.error('envia' + Math.random());
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
