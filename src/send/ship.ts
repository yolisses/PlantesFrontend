
import { sendImage } from "./sendImage";
import { waitSomeTime } from "./waitSomeTime";
import { confirmSending } from "./confirmSending";
import { formatFormToItemInfo } from "./formatFormToItemInfo";
import { getNewImageByLocalUri } from "./getNewImageByLocalUri";
import { sendItemInfoAndImagesCount } from "./sendItemInfoAndImagesCount";


export async function ship(itemFormData: ItemFormData) {
    const id = Math.random()

    const images = Object.keys(itemFormData.images).map(getNewImageByLocalUri)

    const shipment: Shipment = {
        id,
        images,
        sent: false,
        itemFormData: itemFormData,
        itemInfoSent: false,
        itemInfo: formatFormToItemInfo(itemFormData),
    }

    while (!shipment.sent) {
        try {
            if (!shipment.itemInfoSent) {
                await sendItemInfoAndImagesCount(shipment);
            } else {
                await Promise.all(
                    shipment.images.map(image => sendImage(image, shipment.savedItem._id)),
                );
                await confirmSending(shipment.savedItem._id);
                shipment.sent = true;
            }
        } catch (err) {
            console.error(err.response || err);
            if (err?.response?.status === 401 || err?.response?.status === 400) {
                return;
            } else {
                await waitSomeTime();
            }
        }
    }
}
