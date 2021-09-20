import {brokenSendLink} from './brokenSendLink';
import {getNewLink} from './getNewLink';
import {sendImage} from './pushImage';
import {waitSomeTime} from './waitSomeTime';

export async function dispatchImage(image) {
  return new Promise(async (resolve, reject) => {
    while (true) {
      if (image.sent) {
        return resolve(image.sendLink.split('?')[0]);
      } else if (!image.sendLink) {
        try {
          const link = await getNewLink(image);
          image.sendLink = link;
        } catch (err) {
          await waitSomeTime();
        }
      } else {
        try {
          await sendImage(image);
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
  });
}
