import {send} from './sendings';
import {sendImage} from './sendImage';
import {waitSomeTime} from './waitSomeTime';
import {compressImage} from './compressImage';
import {confirmSending} from './confirmSending';
import {formatFormToItemInfo} from './formatFormToItemInfo';
import {sendItemCreationRequest} from './sendItemCreationRequest';
import {associateLocalAndRemoteImages} from './associateLocalAndRemoteImages';

export async function ship(itemFormData: ItemFormData, callback: () => any) {
  const id = Math.random();

  const shipment: Shipment = {
    id,
    sent: false,
    itemFormData: itemFormData,
    images: itemFormData.images,
    itemInfo: formatFormToItemInfo(itemFormData),
  };

  send.sendings[id] = shipment;

  async function getCompressedImageUri(image: Image) {
    if (!image.localUriCompressed) {
      try {
        image.localUriCompressed = await compressImage(image.localUri);
      } catch (err) {
        console.error('error compressing image', err);
        image.localUriCompressed = image.localUri;
      }
    }
    return image;
  }

  await Promise.all(shipment.images.map(getCompressedImageUri));

  while (!shipment.sent) {
    try {
      if (!shipment.savedItem) {
        shipment.savedItem = await sendItemCreationRequest(shipment);
        // console.error('item info saved', shipment.savedItem);
      } else {
        associateLocalAndRemoteImages(shipment);
        await Promise.all(
          shipment.images.map(image =>
            sendImage(image, shipment.savedItem._id),
          ),
        );
        const savedItem = await confirmSending(shipment.savedItem._id);
        shipment.savedItem = savedItem;
        // console.error('enviado com sucesso', shipment);
        shipment.sent = true;
      }
    } catch (err) {
      console.error(
        'erro no primeiro loop',
        JSON.stringify(err?.response) || err,
      );
      if (err?.response?.status === 401 || err?.response?.status === 400) {
        return;
      } else {
        await waitSomeTime();
      }
    }
  }

  send.sendings[id] = shipment;

  if (callback) {
    callback();
  }
}
