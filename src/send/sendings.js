import {observable} from 'mobx';
import {formatToPlant} from './formatToPlant';
import {sendPlant} from './sendPlant';

export const send = observable({sendings: {}, refresh: 0});

export function pushSending(item) {
  const id = Math.random();
  const sending = {};
  sending.sendingId = id;
  sending.localData = formatToPlant(item);
  send.sendings[id] = sending;
  sendPlant(sending, () => {
    try {
      send.sendings[id].sent = true;
      console.error('acabou', id);
      send.refresh = id;
    } catch (err) {
      console.error(err);
    }
  });
}

export function removeSending(id) {
  delete send.sendings[id];
}

export function updatePlantInfo(item) {}
