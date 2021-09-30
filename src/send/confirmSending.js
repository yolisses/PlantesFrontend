import {api} from 'api';
import {waitSomeTime} from './waitSomeTime';

export async function confirmSending(plantId) {
  while (true) {
    try {
      const res = await api.post('/confirm-plant-sending', {plantId});
      return res.data;
    } catch (err) {
      console.error('' + err);
      await waitSomeTime();
    }
  }
}
