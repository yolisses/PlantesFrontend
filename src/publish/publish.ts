import {api} from 'api/api';
import {send} from 'send/send';
import {sendImagesInObj} from 'send/sendImagesInObj';
import {formatFormToItemInfo} from './formatFormToItemInfo';

export async function publish(itemFormData: ItemFormData) {
  // console.error(itemFormData);
  const id = Math.random();
  try {
    const itemInfo = formatFormToItemInfo(itemFormData);
    console.error(itemInfo);
    send.sendings[id] = {
      id,
      sent: false,
      itemFormData,
    };
    await sendImagesInObj(itemFormData.images);
    const res = await api.post('/plants', itemInfo);
    console.error(res.data);
    send.sendings[id].sent = true;
  } catch (err) {
    send.sendings[id].error = true;
    console.error(err.response || err);
  }
}
