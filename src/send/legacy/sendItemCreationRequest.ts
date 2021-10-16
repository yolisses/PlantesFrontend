import {api} from '../api/api';
import {getObjectLength} from '../utils/getObjectLength';

export async function sendItemCreationRequest(shipment: Shipment) {
  const creationRequest: CreationRequest = {
    ...shipment.itemInfo,
    imagesCount: getObjectLength(shipment.images),
  };
  const res = await api.post('plant', creationRequest);
  return res.data;
}
