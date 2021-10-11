import { api } from "../api";
import { getObjectLength } from "../utils/getObjectLength";

export async function sendItemInfoAndImagesCount(shipment: Shipment) {
    const creationRequest: CreationRequest = {
        ...shipment.itemInfo,
        imagesCount: getObjectLength(shipment.images)
    }
    const res = await api.post('plant', creationRequest);
    shipment.savedItem = res.data
    shipment.itemInfoSent = true
}