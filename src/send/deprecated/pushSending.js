import {formatToPlant} from './formatToPlant';
import {send} from '../sendings';
import {sendPlant} from './sendPlant';

export function pushSending(item) {
  const id = Math.random();
  const sending = {};
  sending.sendingId = id;
  sending.localData = formatToPlant(item);
  send.sendings[id] = sending;
  sendPlant(sending, () => {
    send.sendings[id].sent = true;
    console.error('acabou', id);
    send.refresh = id;
  });
}
