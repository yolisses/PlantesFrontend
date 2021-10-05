import {observable} from 'mobx';
import {formatToPlant} from './formatToPlant';
import {sendPlant} from './sendPlant';

export const send = observable({sendings: {}});

export function pushSending(item) {
  const id = Math.random();
  const sending = {};
  send.sendings[id] = sending;
  sending.localData = formatToPlant(item);
  sendPlant(sending, () => {
    console.error('acabou', id);
  });
}

export function removeFinisheds() {
  for (let key in send.sendings) {
    if (send.sendings[key]?.sent) {
      delete send.sendings[key];
    }
  }
}
