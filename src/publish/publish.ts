import {api} from 'api/api';
import {formatFormToItemInfo} from './formatFormToItemInfo';

export async function publish(itemFormData: ItemFormData) {
  // console.error(itemFormData);
  try {
    const itemInfo = formatFormToItemInfo(itemFormData);
    console.error(itemInfo);
    const res = await api.post('/plants', itemInfo);
    console.error(res.data);
  } catch (err) {
    console.error(err.response || err);
  }
}
