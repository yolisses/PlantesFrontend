import {api} from '../api';

export async function sendItemCreationRequest(shipment: Shipment) {
  const creationRequest: CreationRequest = {
    ...shipment.itemInfo,
    imagesCount: shipment.images.length,
  };
  const res = await api.post('plant', creationRequest);
  return res.data;
}
