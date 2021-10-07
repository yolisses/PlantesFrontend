import {sendPlantInfo} from './sendPlantInfo';
import {sendImage} from './sendImage';
import {confirmSending} from './confirmSending';
import {waitSomeTime} from './waitSomeTime';

export async function sendPlant(sending, callback) {
  while (!sending.sent) {
    try {
      if (!sending.plantInfoSent) {
        await sendPlantInfo(sending);
      } else {
        const plantId = sending.plantId;
        await Promise.all(
          sending.images.map(image => sendImage({image, plantId})),
        );
        await confirmSending(plantId);
        sending.sent = true;
      }
    } catch (err) {
      if (err?.response?.status === 401 || err?.response?.status === 400) {
        return;
      } else {
        await waitSomeTime();
      }
    }
  }
  if (callback) {
    callback(sending);
  }
}
