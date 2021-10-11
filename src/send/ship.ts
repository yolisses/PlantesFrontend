import {sendImage} from './sendImage';
import {waitSomeTime} from './waitSomeTime';
import {confirmSending} from './confirmSending';
import {formatFormToItemInfo} from './formatFormToItemInfo';
import {getNewImageByLocalUri} from './getNewImageByLocalUri';
import {sendItemCreationRequest} from './sendItemCreationRequest';
import {associateLocalAndRemoteImages} from './associateLocalAndRemoteImages';

export async function ship(itemFormData: ItemFormData) {
  const id = Math.random();

  const images = Object.keys(itemFormData.images).map(getNewImageByLocalUri);

  const shipment: Shipment = {
    id,
    images,
    sent: false,
    itemFormData: itemFormData,
    itemInfoSent: false,
    itemInfo: formatFormToItemInfo(itemFormData),
  };

  while (!shipment.sent) {
    try {
      if (!shipment.itemInfoSent) {
        shipment.savedItem = await sendItemCreationRequest(shipment);
        shipment.itemInfoSent = true;
      } else {
        await associateLocalAndRemoteImages(shipment);
        console.error(shipment);
        await Promise.all(
          shipment.images.map(image =>
            sendImage(image, shipment.savedItem._id),
          ),
        );
        await confirmSending(shipment.savedItem._id);
        console.error(shipment);
        shipment.sent = true;
      }
    } catch (err) {
      console.error(JSON.stringify(err?.response) || err);
      if (err?.response?.status === 401 || err?.response?.status === 400) {
        return;
      } else {
        await waitSomeTime();
      }
    }
  }
}
